import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Chat from 'client/Chat'; // eslint-disable-line
import SignUp from 'client/SignUp'; // eslint-disable-line
import { Auth } from 'modules'; // eslint-disable-line


const routes = (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        <TransitionGroup>
          {Auth.isUserAuthenticated() ?
            <Chat /> :
            <SignUp />
          }
        </TransitionGroup>
      )}
    />
  </Switch>
);

export default routes;
