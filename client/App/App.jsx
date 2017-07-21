import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';
import './app.sass';

import { addMessage } from 'client/Stream/StreamActions'; // eslint-disable-line
import { store } from 'client/index'; // eslint-disable-line

export const colors = {
  accent: '#28AFCC',
};


// ========>> SOCKET.IO <<========

export const socket = io();

socket.on('new message', (msg) => {
  store.dispatch(addMessage(msg));
});


// ========>> AUTH <<========

export class Auth {
  static authenticateUser(token) {
    localStorage.setItem('user', token);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('user') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('user');
  }

  static getToken() {
    return localStorage.getItem('user');
  }
}


const App = () => (<BrowserRouter>{routes}</BrowserRouter>);

export default App;
