import * as React from 'react';
import * as ReactDOM from 'react-dom';

import readData from '../util/readDataFromDOM';
import App from './js/App';


interface initDataObj {
  message: string
}

// Client side app rendered
if (typeof window !== undefined) {
  const initData: initDataObj = JSON.parse(readData('init_data'));
  const { message } = initData;

  ReactDOM.render(
    <App { ...initData } />,
    document.getElementById('reactApp')
  );

}
