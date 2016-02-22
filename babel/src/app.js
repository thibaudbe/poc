import action from './action';
import { cat, dog } from './data';

import http from 'http';

const hostname = '127.0.0.1';
const port = 1337;


http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end( action([ cat, dog ]).join('\n') );
}).listen(port, hostname, _ => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
