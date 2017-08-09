// ========>> SOCKET.IO <<========
// const socket = io();

// Wrapper over socket.io

class Socket {
  constructor() {
    this.socket = null;
  }

  connect() {
    if (this.socket === null) {
      this.socket = io();
    } else throw new Error('Socket already defined');
  }

  disconnect() {
    if (this.socket !== null) this.socket.disconnect();
  }

  getSocket() {
    return this.socket;
  }

  on(event, callback) {
    if (this.socket !== null) this.socket.on(event, callback);
  }

  emit(event, message) {
    if (this.socket !== null) this.socket.emit(event, message);
  }
}

const socket = new Socket();


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
