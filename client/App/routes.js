import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Chat from 'client/Chat'; // eslint-disable-line
import SignUp from 'client/SignUp'; // eslint-disable-line
import Login from 'client/Login'; // eslint-disable-line
import { Auth } from 'modules'; // eslint-disable-line


const routes = (
  <TransitionGroup>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
            Auth.isUserAuthenticated() ?
              <Redirect push to="/chat" /> :
              <Redirect push to="/signup" />

        )}
      />
      <Route path="/chat" component={Chat} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </TransitionGroup>
);

export default routes;
