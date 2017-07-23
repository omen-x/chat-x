// ========>> SOCKET.IO <<========

const socket = io();

// ========>> AUTH <<========

class Auth {
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


export default {
  socket,
  Auth
};
