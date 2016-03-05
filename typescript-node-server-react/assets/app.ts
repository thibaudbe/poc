import * as express from 'express'
import * as path from 'path'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

const host: string = 'localhost';
const isProduction: boolean = process.env.NODE_ENV === 'production';
const port: number = isProduction ? process.env.PORT : 3000;

const PATH = {
  react: './app/js/',
  public: './public/'
};

const initData = {
  message: 'world ! =)'
};

// Settings
const app = express();
app.use(express.static(PATH.public));

const App = React.createFactory(require(PATH.react +'App').default);
const ReactApp = ReactDOMServer.renderToString(App(initData));

const body = `<html><head>`
  + `<meta charSet="utf-8" />`
  + `<title>Isomorphic app</title>`
  + `</head><body>`
  + `<div id="reactApp">${ReactApp}</div>`
  + `<script id="init_data" data-value='${JSON.stringify(initData)}'></script>`
  // + `<script type="text/javascript" src="${PATH.public}/bundle.js?v=111"></script>`
  + `</body></html>`;


app.get('/', (req: express.Request, res: express.Response) => {
  res.send('<!DOCTYPE html>'+ body);
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
