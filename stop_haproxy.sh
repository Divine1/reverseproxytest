pid=$(cat haproxy.pid)
kill -9 ${pid}
rm haproxy.pid
