import * as express from 'express';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

const app = express();
const port = 3000;

// Settings
app.set('views', path.join(__dirname, '../server/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));


const initData = {
  message: 'world ! =)'
};

const App = React.createFactory(require('./js/App').default);
const ReactApp = ReactDOMServer.renderToString(App(initData));


app.get('/', (req, res) => {
  res.render('index.ejs', {
    reactOutput: ReactApp,
    initData: JSON.stringify(initData)
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
