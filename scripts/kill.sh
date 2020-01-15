set -x
npm run build
set +x
set -x
kill $(cat .pidfile)