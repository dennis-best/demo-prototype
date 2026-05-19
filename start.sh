#!/bin/sh
# One-command local run (installs deps if needed, opens browser).
set -e
cd "$(dirname "$0")"
if [ ! -d node_modules ]; then
  echo "Installing dependencies…"
  npm install
fi
exec npm start
