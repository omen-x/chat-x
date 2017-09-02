// ========>> SOCKET.IO <<========
// const socket = io();

// Wrapper over socket.io

class Socket {
  constructor() {
    this.socket = null;
    this.events = [];
    this.emitters = [];
  }

  connect(user) {
    const query = {
      name: user.name,
      avatar: user.avatar,
    };

    if (this.socket === null) {
      this.socket = io(window.location.href, { query });

      // attach events
      this.events.map(e => {
        this.socket.on(e.event, e.callback);
      });

      // run emitters right after connection
      this.emitters.map(e => {
        this.socket.emit(e.event, e.message);
      });
    } else {
      console.log('plural connection');
      this.socket.connect();
    }
  }

  disconnect() {
    if (this.socket !== null) this.socket.disconnect();
  }

  getSocket() {
    return this.socket;
  }

  on(event, callback) {
    if (this.socket !== null) this.socket.on(event, callback);
    else {
      // save events if the socket isn't connected
      this.events.push({ event, callback });
    }
  }

  emit(event, message) {
    if (this.socket !== null) this.socket.emit(event, message);
    else {
      // save emitters if the socket isn't connected
      this.emitters.push({ event, message });
    }

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
  Auth,
};
