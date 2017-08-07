import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.sass';
import routes from './routes';
import { socket } from './modules';


class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>{routes}</BrowserRouter>
    );
  }
}

export default App;
