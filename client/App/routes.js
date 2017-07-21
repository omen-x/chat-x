import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from 'client/Chat/Chat'; // eslint-disable-line
import SignUpContainer from 'client/SignUp/SignUpContainer'; // eslint-disable-line
import { Auth } from 'client/App/App'; // eslint-disable-line


const routes = (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        Auth.isUserAuthenticated() ? <Chat /> : <SignUpContainer />
      )}
    />
  </Switch>
);

export default routes;
