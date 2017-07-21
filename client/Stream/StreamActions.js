import { socket } from 'client/App/App'; // eslint-disable-line


export const addMessage = (message = {}) => ({
  type: 'ADD_MESSAGE',
  message
});

// composes a new message from current user
// we'll use redux-thunk to access user info(avatar, name)
// and call another action with a composed message
export const newMessage = (text = '') => {
  const date = new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric'
  });


  return (dispatch, getState) => {
    const { avatar, name, secondName } = getState().user;
    const author = `${name} ${secondName}`;
    const id = Math.floor(Math.random() * 1000000);
    const message = { id, author, avatar, text, date };

    // send to server
    socket.emit('new message', message);

    // save in store
    // not necessary? (possible problems: delay)
    dispatch(addMessage(message));
  };
};
