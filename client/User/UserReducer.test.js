import reducer from './UserReducer';


describe('User reducer', () => {
  it('deauthenticate user', () => {
    const action = {
      type: 'DEAUTHENTICATE_USER'
    };
    const state = { isUserAuthenticated: true };
    const expectedState = { isUserAuthenticated: false };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('updates user data', () => {
    const state = {
      id: null,
      name: '',
      email: '',
      avatar: null
    };
    const expectedState = {
      id: 5,
      name: 'Denis',
      email: 'denis.omen.x@gmail.com',
      avatar: 1
    };
    const action = {
      type: 'UPDATE_USER_DATA',
      data: {
        id: 5,
        name: 'Denis',
        email: 'denis.omen.x@gmail.com',
        avatar: 1
      }
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
