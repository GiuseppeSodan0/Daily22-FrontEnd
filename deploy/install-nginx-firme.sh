#!/usr/bin/env bash
# Installa (o aggiorna) la location nginx ^~ /firme/ per un dominio Plesk.
#
# Uso: install-nginx-firme.sh <dominio> <file-snippet>
#
# Il sito daily22.it e' servito da nginx (Plesk), quindi i file .htaccess non
# vengono letti: i vincoli di pubblicazione (noindex, nessuna directory listing,
# nessuna pagina/galleria del personale) sono applicati qui.
#
# Lo script e' idempotente: puo' essere eseguito a ogni deploy.
# Se nginx -t fallisce, la configurazione precedente viene ripristinata.

set -euo pipefail

DOMAIN="${1:?dominio richiesto}"
SNIPPET_FILE="${2:?file snippet richiesto}"
NGINX_DIR="${NGINX_CONF_DIR:-/etc/nginx}"
VHOST_BASE="${VHOST_BASE:-/var/www/vhosts}"
VHOST_DIR="${VHOST_BASE}/${DOMAIN}"
SNIPPET_NAME="nginx_firme.conf"

log() { printf '[nginx-firme] %s\n' "$*"; }
die() { printf '[nginx-firme] ERROR: %s\n' "$*" >&2; exit 1; }

[ -f "$SNIPPET_FILE" ] || die "snippet non trovato: $SNIPPET_FILE"
command -v nginx >/dev/null 2>&1 || die "binario nginx non trovato"
[ -d "$VHOST_DIR" ] || die "directory del vhost non trovata: $VHOST_DIR"

diagnostics() {
  log "--- diagnostica ---"
  log "nginx: $(command -v nginx || echo 'non trovato')"
  nginx -V 2>&1 | head -3 | sed 's/^/[nginx-firme]   /' || true
  for d in "$NGINX_DIR" "$NGINX_DIR/plesk.d" "$VHOST_DIR" "$VHOST_DIR/conf" /var/www/vhosts; do
    log "ls $d"
    ls -la "$d" 2>&1 | head -25 | sed 's/^/[nginx-firme]   /' || true
  done
  log "grep -rl '$DOMAIN' su $NGINX_DIR e $VHOST_DIR"
  grep -rl "$DOMAIN" "$NGINX_DIR" "$VHOST_DIR" 2>/dev/null | head -20 | sed 's/^/[nginx-firme]   /' || true
  log "file nginx che contengono '$DOMAIN' (ricerca piu' ampia)"
  timeout 90 grep -rl "$DOMAIN" /etc /usr/local/etc /opt/plesk 2>/dev/null \
    | grep -iE 'nginx|plesk\.d|vhost' | head -20 | sed 's/^/[nginx-firme]   /' || true
}

# 1. File di configurazione nginx che dichiarano questo dominio.
mapfile -t CANDIDATES < <(
  grep -rlE "server_name[^;]*\b${DOMAIN}\b" "$NGINX_DIR" "$VHOST_DIR" 2>/dev/null \
    | grep -v '\.bak' | sort -u
)
if [ "${#CANDIDATES[@]}" -eq 0 ]; then
  # il blocco server puo' vivere fuori dai percorsi standard: cercalo piu' in largo
  mapfile -t CANDIDATES < <(
    timeout 90 grep -rlE "server_name[^;]*\b${DOMAIN}\b" /etc /usr/local/etc /opt/plesk 2>/dev/null \
      | grep -v '\.bak' | sort -u
  )
fi
if [ "${#CANDIDATES[@]}" -eq 0 ]; then
  diagnostics
  die "nessuna configurazione nginx trovata per $DOMAIN"
fi
log "file di configurazione candidati: ${CANDIDATES[*]}"

# 2. File che contengono il blocco server reale (quelli con 'root').
VHOST_FILES=()
for f in "${CANDIDATES[@]}"; do
  if grep -qE '^[[:space:]]*root[[:space:]]' "$f"; then
    VHOST_FILES+=("$f")
  fi
done
if [ "${#VHOST_FILES[@]}" -eq 0 ]; then
  diagnostics
  die "nessun blocco server nginx trovato per $DOMAIN"
fi

# 3. Cerca un include gia' presente che possa raccogliere il nostro snippet.
INSTALL_DIR=""
for f in "${VHOST_FILES[@]}"; do
  while IFS= read -r inc; do
    pat="${inc#*include}"
    pat="${pat# }"
    pat="${pat%;}"
    pat="${pat#\"}"; pat="${pat%\"}"
    pat="${pat#\'}"; pat="${pat%\'}"
    case "$pat" in /*) ;; *) pat="$VHOST_DIR/$pat" ;; esac
    dir="$(dirname "$pat")"
    base="$(basename "$pat")"
    # il pattern deve poter raccogliere nginx_firme.conf
    case "$SNIPPET_NAME" in
      $base) ;;
      *) continue ;;
    esac
    # ... e la directory deve stare dentro la directory del vhost
    case "$dir" in
      "$VHOST_DIR"/*) INSTALL_DIR="$dir"; break ;;
    esac
  done < <(grep -ohE 'include[[:space:]]+[^;]+;' "$f" 2>/dev/null | sort -u)
  [ -n "$INSTALL_DIR" ] && break
done

BACKUPS=()

if [ -n "$INSTALL_DIR" ]; then
  log "include esistente rilevato: $INSTALL_DIR"
  mkdir -p "$INSTALL_DIR"
  cp "$SNIPPET_FILE" "$INSTALL_DIR/$SNIPPET_NAME"
else
  log "nessun include utilizzabile: iniezione nel blocco server"
  INSTALL_DIR="$VHOST_DIR/conf"
  mkdir -p "$INSTALL_DIR"
  cp "$SNIPPET_FILE" "$INSTALL_DIR/$SNIPPET_NAME"
  INCLUDE_LINE="include $INSTALL_DIR/$SNIPPET_NAME;"

  for f in "${VHOST_FILES[@]}"; do
    if grep -qF "$INCLUDE_LINE" "$f"; then
      log "include gia' presente in $f"
      continue
    fi
    cp "$f" "$f.bak-firme"
    BACKUPS+=("$f.bak-firme")
    awk -v inc="$INCLUDE_LINE" -v dom="$DOMAIN" '
      { print }
      /^[[:space:]]*server_name/ && index($0, dom) > 0 { print "    " inc }
    ' "$f.bak-firme" > "$f"
    log "include inserito in $f"
  done
fi

# 4. Validazione: se nginx -t fallisce, ripristino e uscita con errore.
restore() {
  for b in "${BACKUPS[@]}"; do
    if [ -f "$b" ]; then
      cp "$b" "${b%.bak-firme}"
      rm -f "$b"
      log "ripristinato ${b%.bak-firme}"
    fi
  done
}

if ! nginx -t; then
  restore
  nginx -t || true
  die "nginx -t fallito: configurazione ripristinata"
fi

if command -v systemctl >/dev/null 2>&1; then
  systemctl reload nginx
elif command -v nginx >/dev/null 2>&1; then
  nginx -s reload
else
  die "nessun metodo di reload disponibile"
fi

log "snippet installato in $INSTALL_DIR/$SNIPPET_NAME e nginx ricaricato"
