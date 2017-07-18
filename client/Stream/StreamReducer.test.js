import messages from './StreamReducer';


describe('Stream reducer', () => {
  const reducer = messages;

  test('adds new message to the stream', () => {
    const state = [{ author: 'John', avatar: 1, text: 'John\'s text', date: '14 : 25' }];
    const action = {
      type: 'ADD_MESSAGE',
      message: { author: 'Valera', avatar: 1, text: 'Valera\'s text', date: '15 : 40' }
    };
    const expectedState = [
      { author: 'John', avatar: 1, text: 'John\'s text', date: '14 : 25' },
      { author: 'Valera', avatar: 1, text: 'Valera\'s text', date: '15 : 40' }
    ];

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
