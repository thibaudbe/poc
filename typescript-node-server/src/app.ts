import * as express from 'express';

const app = express();
const port = 1337;


app.get('/', function (req, res) {
  res.send('Hello World =) !');
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
