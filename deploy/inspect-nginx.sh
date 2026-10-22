#!/usr/bin/env bash
# Ispeziona la configurazione nginx del dominio (solo lettura, nessuna modifica).
set -uo pipefail

DOMAIN="${1:-daily22.it}"
PLESK_VHOSTS="/etc/nginx/plesk.conf.d/vhosts"
SYSTEM_VHOST="/var/www/vhosts/system/${DOMAIN}"

echo "=== ls -la ${PLESK_VHOSTS} ==="
ls -la "${PLESK_VHOSTS}" 2>&1

echo "=== vhost del dominio ==="
for f in "${PLESK_VHOSTS}/${DOMAIN}.conf" "${PLESK_VHOSTS}/${DOMAIN}"*; do
  [ -e "$f" ] || continue
  echo "--- ${f} -> $(readlink -f "$f") ---"
  cat "$f" 2>&1 | head -150
done

echo "=== ls -la ${SYSTEM_VHOST} ==="
ls -la "${SYSTEM_VHOST}" 2>&1
echo "=== ls -la ${SYSTEM_VHOST}/conf ==="
ls -la "${SYSTEM_VHOST}/conf" 2>&1

echo "=== include / server_name / root in ${SYSTEM_VHOST} ==="
grep -rn --include='*.conf' -E "include|server_name|^[[:space:]]*root[[:space:]]" "${SYSTEM_VHOST}" 2>/dev/null | head -80

echo "=== config nginx effettiva: blocchi del dominio ==="
nginx -T 2>&1 | grep -nE "^# configuration file|server_name|^[[:space:]]*root |include " | sed -n '1,400p' | grep -iE "daily22|configuration file /var/www|configuration file /etc/nginx/plesk.conf.d/vhosts" | head -60
