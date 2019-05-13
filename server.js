var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': text/plain });
  res.end('welcome to the server cyber');
});

server.listen(3000, '127.0.0.1');
console.log("sup cuuz now listening to port 3000"); /*ctrl C can be used to
stop running the server */
