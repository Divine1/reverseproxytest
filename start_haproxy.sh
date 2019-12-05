haproxy -f /Users/dev/Applications/codes/haproxypoc/haproxy.cfg
#haproxy -f /Users/dev/Applications/codes/haproxypoc/haproxyInsured.cfg
pid=$(lsof -ti :8500)
echo "${pid}" > haproxy.pid
