import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import store from './store';

import App from './app';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
