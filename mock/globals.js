import 'whatwg-fetch';


// ========>> SOCKE.IO <<========

const io = () => null;

global.io = io;


// ========>> LOCAL STORAGE <<========

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();


// ========>> MOCK RESPONSE <<========
// window.Response accessable through whatwg-fetch

  // json

/**
 * Creates a server response
 * @param  {number} status
 * @param  {string} statusText
 * @param  {JSON object} response
 * @return {Response object}
 */
const mockResponseJson = (status, statusText, response) => (
  new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json'
    }
  })
);

global.mockResponseJson = mockResponseJson;
