import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from 'client/Chat/Chat'; // eslint-disable-line


const routes = (
  <Switch>
    <Route path="/" exact component={Chat} />
  </Switch>
);

export default routes;
