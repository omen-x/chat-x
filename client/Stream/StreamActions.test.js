import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { composeNewMessage, composeNewSystemMessage } from './StreamActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Stream actions', () => {
  // TODO: test message.id
  it('composes new message', () => {
    const text = 'His remarks rub many coworkers the wrong way';
    const date = new Date().toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    });
    const user = {
      avatar: 1,
      name: 'Duncan',
      id: 10,
    };
    const expectedMessage = {
      author: 'Duncan',
      authorId: 10,
      avatar: 1,
      text,
      date,
      type: 'user',
    };
    const store = mockStore({ user });

    store.dispatch(composeNewMessage(text));

    // check action
    expect(store.getActions()[0].type).toBe('ADD_MESSAGE');

    // check message composed by action
    const message = store.getActions()[0].message;
    expect(message).toEqual(expect.objectContaining(expectedMessage));
  });

  it('composes new system message', () => {
    const date = new Date().toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    });
    let message = {};
    let expectedMessage = {};

    const store = mockStore();

    // new user connected
    store.dispatch(composeNewSystemMessage('new user connected', 'Gregory'));
    expectedMessage = {
      text: 'Gregory connected',
      date,
      type: 'system',
    };
    message = store.getActions()[0].message;

    expect(message).toEqual(expect.objectContaining(expectedMessage));

    // clear actions
    store.clearActions();

    // new user connected
    store.dispatch(composeNewSystemMessage('user disconnected', 'Bob'));
    expectedMessage = {
      text: 'Bob disconnected',
      date,
      type: 'system',
    };
    message = store.getActions()[0].message;

    expect(message).toEqual(expect.objectContaining(expectedMessage));

    // check action
    expect(store.getActions()[0].type).toBe('ADD_MESSAGE');
  });
});
