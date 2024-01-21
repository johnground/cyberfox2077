#!/bin/bash
set -e

# Wait for the SSL certificates to be present in the shared volume
CERT_DIR="/shared/ssl_certs"
while [[ ! -f "$CERT_DIR/cert.pem" || ! -f "$CERT_DIR/key.pem" ]]; do
  echo "Waiting for SSL certificates..."
  sleep 5
done

echo "SSL certificates are present. Starting supervisord..."
exec /usr/bin/supervisord