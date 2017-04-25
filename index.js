import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/App';
import store from './src/store/create.store';

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);