import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.sass';
import routes from './routes';


const App = () => (<div id="app">{routes}</div>);

export default App;
