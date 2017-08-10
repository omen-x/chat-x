import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import App, { reducer } from 'client/App'; // eslint-disable-line

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

export const store = createStore(reducer, applyMiddleware(thunk, historyMiddleware));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
