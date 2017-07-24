import reducer from './UserReducer';


describe('User` reducer', () => {
  it('deauthenticate user', () => {
    const action = {
      type: 'DEAUTHENTICATE_USER'
    };
    const state = { isUserAuthenticated: true };
    const expectedState = { isUserAuthenticated: false };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
