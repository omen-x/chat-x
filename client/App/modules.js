import { store } from 'client/index'; // eslint-disable-line
import { actions as streamActions } from 'client/Stream'; // eslint-disable-line


// ========>> SOCKET.IO <<========

export const socket = io();

const { addMessage } = streamActions;

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
