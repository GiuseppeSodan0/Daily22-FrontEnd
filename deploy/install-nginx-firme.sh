#!/usr/bin/env bash
# Installa (idempotente) la location nginx per /firme/ nel vhost di un dominio.
#
# Struttura Plesk/Debian nginx rilevata su daily22.it:
#   /etc/nginx/plesk.conf.d/vhosts/<dominio>.conf  -> symlink ->
#   /var/www/vhosts/system/<dominio>/conf/nginx.conf        (generato da Plesk)
#       ... include "/var/www/vhosts/system/<dominio>/conf/vhost_nginx.conf"; ...
#   /var/www/vhosts/system/<dominio>/conf/vhost_nginx.conf   (file "extra" del dominio)
#
# Il blocco server e' quello SSL (443); l'http (80) fa solo redirect 301 verso https.
# La location viene aggiunta al file incluso nel blocco server, cosi' non si tocca
# il file generato da Plesk. Ogni deploy riesegue questo script: se il file viene
# rigenerato da Plesk, la location viene rimossa.
#
# Uso: install-nginx-firme.sh <dominio> <snippet.conf>

set -euo pipefail

DOMAIN="${1:-}"
SNIPPET="${2:-}"
[ -n "$DOMAIN" ] || { echo "uso: $0 <dominio> <snippet.conf>" >&2; exit 2; }
[ -f "$SNIPPET" ] || { echo "[nginx-firme] snippet non trovato: $SNIPPET" >&2; exit 2; }

NGINX_DIR="${NGINX_DIR:-/etc/nginx}"
SYSTEM_VHOST_DIR="${SYSTEM_VHOST_DIR:-/var/www/vhosts/system}"
MARKER="# Daily Practice 22 - /firme/"

log()  { echo "[nginx-firme] $*"; }
die()  { echo "[nginx-firme] ERRORE: $*" >&2; exit 1; }

# Path reale (risolve i symlink): utile per non sovrascrivere un link.
resolve_path() {
  if command -v realpath >/dev/null 2>&1; then realpath "$1"; else readlink -f "$1"; fi
}

# 1. File nginx del dominio.
VHOST_LINK="$NGINX_DIR/plesk.conf.d/vhosts/${DOMAIN}.conf"
VHOST_FILE=""
if [ -e "$VHOST_LINK" ]; then
  VHOST_FILE="$(resolve_path "$VHOST_LINK")"
fi
if [ -z "$VHOST_FILE" ] || [ ! -f "$VHOST_FILE" ]; then
  mapfile -t FOUND < <(grep -rlE "server_name[^;]*\b${DOMAIN}\b" "$NGINX_DIR" 2>/dev/null | grep -v '\.bak' | sort -u)
  [ "${#FOUND[@]}" -gt 0 ] || die "nessuna configurazione nginx trovata per $DOMAIN"
  VHOST_FILE="$(resolve_path "${FOUND[0]}")"
fi
log "configurazione nginx del dominio: $VHOST_FILE"

# 2. File "extra" del dominio incluso nel blocco server (target preferito).
TARGET=""
DOMAIN_CONF_DIR="${SYSTEM_VHOST_DIR}/${DOMAIN}/conf"
while IFS= read -r inc; do
  pat="${inc#*include}"
  pat="${pat# }"; pat="${pat%;}"
  pat="${pat#\"}"; pat="${pat%\"}"
  pat="${pat#\'}"; pat="${pat%\'}"
  case "$pat" in
    /*) full="$pat" ;;
    *)  full="$NGINX_DIR/$pat" ;;
  esac
  [ -f "$full" ] || continue
  case "$full" in
    "$DOMAIN_CONF_DIR"/*) ;;
    *) continue ;;
  esac
  [ "$full" = "$VHOST_FILE" ] && continue
  TARGET="$full"
  break
done < <(grep -oE 'include[[:space:]]+"?[^";]+\.conf"?' "$VHOST_FILE" 2>/dev/null | sort -u)

if [ -n "$TARGET" ]; then
  log "file incluso nel blocco server: $TARGET"
else
  # fallback: nessun include utilizzabile, inseriamo nel vhost subito dopo root
  TARGET="$VHOST_FILE"
  log "nessun include utilizzabile: inserimento diretto in $TARGET"
fi

# 3. Idempotenza: il marcatore segnala che la location e' gia' presente.
if grep -qF "$MARKER" "$TARGET" 2>/dev/null; then
  log "location /firme/ gia' presente in $TARGET: nessuna modifica"
  exit 0
fi

# 4. Backup.
BACKUP="${TARGET}.bak-firme"
cp -p "$TARGET" "$BACKUP"
log "backup creato: $BACKUP"

# 5. Inserimento dello snippet.
SNIPPET_BODY="$(cat "$SNIPPET")"

if [ "$TARGET" = "$VHOST_FILE" ]; then
  # inserimento dentro il blocco server, subito dopo la direttiva root del dominio
  awk -v domain="$DOMAIN" -v body="$SNIPPET_BODY" '
    { print }
    !done && $0 ~ ("^[[:space:]]*root[[:space:]]+\"?[^;]*" domain "/") { print ""; print body; done=1 }
  ' "$TARGET" > "${TARGET}.tmp" && cat "${TARGET}.tmp" > "$TARGET" && rm -f "${TARGET}.tmp"
  grep -qF "$MARKER" "$TARGET" || die "inserimento nel blocco server non riuscito"
else
  {
    printf '\n'
    printf '%s\n' "$SNIPPET_BODY"
  } >> "$TARGET"
fi
log "snippet installato in $TARGET"

# 6. Validazione e reload, con rollback in caso di errore.
if ! nginx -t 2>&1 | sed 's/^/[nginx-firme] /'; then
  cp -p "$BACKUP" "$TARGET"
  die "configurazione nginx non valida: ripristinato il backup"
fi

if systemctl reload nginx 2>/dev/null; then
  log "nginx ricaricato"
elif nginx -s reload 2>/dev/null; then
  log "nginx ricaricato"
else
  die "reload di nginx non riuscito"
fi

log "location /firme/ installata per $DOMAIN"
