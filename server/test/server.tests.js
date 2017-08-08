const request = require('supertest');

// console.log(global.app)

describe.('Server', () => {
  it('handles auth request', () => {
    request(app)
      .post('/auth/signup')
      .expect('Content-type', '/json/')
      .expect(200)
      .end((err) => {
        if (err) throw err;
      });
  });
});
