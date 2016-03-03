import * as React from 'react';
import * as ReactDOM from 'react-dom';

import readData from './util/readDataFromDOM';
import App from './App';


// Client side app rendered
if (typeof window !== undefined) {
  const initData = readData('init_data');
  const { message } = initData;
  console.log('what a mess', message);

  ReactDOM.render(
    <App { ...initData } />,
    document.getElementById('reactApp')
  );

}
