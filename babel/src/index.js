const action = require('./action');
const data = require('./data');

const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;


http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end( action(data).join('\n') );
}).listen(port, hostname, _ => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
