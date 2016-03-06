var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World, Instance 3\n');
}).listen(8083, '0.0.0.0');

console.log('Server running at http://0.0.0.0:8083/');
