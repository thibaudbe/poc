import * as express from 'express';

import action from './action';
import { cat, dog } from './data';


const app = express();
const port: number = 1337;


app.get('/', function (req, res) {
  res.send( action([ cat, dog ]).join('\n') );
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
