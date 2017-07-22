import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from 'client/Chat'; // eslint-disable-line
import SignUp from 'client/SignUp'; // eslint-disable-line

import * as index from './index.js'; // eslint-disable-line

console.log(index.modules.Auth); // why undefind&&&&&

// console.log(appModules);
// const { Auth } = myApp.modules;

const routes = (
  <Switch>
    <Route
      path="/"
      exact
      // render={() => (
      //   Auth.isUserAuthenticated() ? <Chat /> : <SignUp />
      // )}
      render={() => (
        <Chat />
      )}
    />
  </Switch>
);

export default routes;
