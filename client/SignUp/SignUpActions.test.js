import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions as userActions } from 'client/User'; // eslint-disable-line
import { signupUser, setFormError, hideLoader } from './SignUpActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// const { updateUserData } = userActions;


describe('SignUp actions', () => {
  // -handles server response
  // -calls udpateUserData
  it('correct signupUser', () => {
    const store = mockStore({});
    const responseBody = {
      token: 'signedToken',
      // user: {
      //   id: 10,
      //   name: 'Denis',
      //   avatar: 1
      // }
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponseJson(200, null, JSON.stringify(responseBody)))
    );


    return store.dispatch(signupUser())
      .then(() => {
        const actions = store.getActions();

        // updateUserData action
        // expect(actions[1]).toEqual(updateUserData(responseBody.user));
      });
  });

  it('incorrect signupUser', () => {
    const store = mockStore({});
    const responseBody = {
      error: 'This email is already taken'
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponseJson(409, null, JSON.stringify(responseBody)))
    );


    return store.dispatch(signupUser())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(setFormError(responseBody.error));
        expect(actions[1]).toEqual(hideLoader());
      });
  });
});
