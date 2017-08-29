import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { updateUserData, fetchUserData, connectUser } from './UserActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('User actions', () => {
  // -handles server response
  // -calls udpateUserData
  // -calls connectUser
  it('fetchUserData', () => {
    const store = mockStore({});
    const responseBody = {
      id: 10,
      name: 'Denis',
      avatar: 1,
      email: 'denis.omen.x@gmail.com'
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponseJson(200, null, JSON.stringify(responseBody)))
    );


    return store.dispatch(fetchUserData())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(updateUserData(responseBody));
        // expect(actions[1]).toEqual(connectUser(responseBody));
      });
  });
});
