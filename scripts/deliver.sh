set -x
npm run build
set +x

set -x
serve -s -l 3000 build &
sleep 1
echo $! > .pidfile
set +x