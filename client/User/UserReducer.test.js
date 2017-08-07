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

  it('sets user data', () => {
    const state = {
      id: null,
      name: '',
      secondName: '',
      fullName: '',
      avatar: null
    };
    const expectedState = {
      id: 5,
      name: 'Denis',
      secondName: 'Volok',
      fullName: 'Denis Volok',
      avatar: 1
    };
    const action = {
      type: 'SET_USER_DATA',
      data: {
        id: 5,
        name: 'Denis',
        secondName: 'Volok',
        fullName: 'Denis Volok',
        avatar: 1
      }
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
