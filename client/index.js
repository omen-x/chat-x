import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App, { reducer } from 'client/App'; // eslint-disable-line


export const store = createStore(reducer, applyMiddleware(thunk)); // eslint-disable-line


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
