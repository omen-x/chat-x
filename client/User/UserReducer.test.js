import reducer from './UserReducer';


describe('User reducer', () => {
  it('updates user data', () => {
    const state = {
      id: '',
      name: '',
      email: '',
      avatar: null
    };
    const expectedState = {
      id: '5',
      name: 'Denis',
      email: 'denis.omen.x@gmail.com',
      avatar: 1
    };
    const action = {
      type: 'UPDATE_USER_DATA',
      data: {
        id: '5',
        name: 'Denis',
        email: 'denis.omen.x@gmail.com',
        avatar: 1
      }
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
