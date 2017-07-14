import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';
import './app.sass';


export const colors = {
  accent: '#28AFCC',
};

// const socket = io();

const App = () => (<BrowserRouter>{routes}</BrowserRouter>);

export default App;
