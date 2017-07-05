import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'client/HomePage/Home'; // eslint-disable-line


const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default routes;
