set -x
HTTPS=true npm start &
sleep 1
echo $! > .pidfile
set +x