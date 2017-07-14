import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';
import './app.sass';


export const COLORS = {
  accent: '#dc8338',
};

const socket = io();

const App = () => (<BrowserRouter>{routes}</BrowserRouter>);

export default App;
