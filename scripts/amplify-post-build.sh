#!/usr/bin/env sh
# Emit Amplify static deployment spec so the deploy phase does not run Next.js SSR checks.
# Run after: npm run build (which produces dist/)
set -e
mkdir -p .amplify-hosting/static
cp -r dist/. .amplify-hosting/static/
cat > .amplify-hosting/deploy-manifest.json << 'EOF'
{
  "version": 1,
  "routes": [
    { "path": "/*", "target": { "kind": "Static" } }
  ],
  "framework": { "name": "static", "version": "1.0.0" }
}
EOF
