import { socket } from 'modules'; // eslint-disable-line

const addMessage = (message = {}) => ({
  type: 'ADD_MESSAGE',
  message,
});

// composes a new message from current user
// we'll use redux-thunk to access user info(avatar, name)
// and call another action with a composed message
const composeNewMessage = (text = '') => {
  const date = new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (dispatch, getState) => {
    const { avatar, name, id: authorId } = getState().user;
    const author = name;
    const id = Math.floor(Math.random() * 1000000);
    const type = 'user';
    const message = { id, author, authorId, avatar, text, date, type };

    // send to server
    socket.emit('new message', message);

    // save in store
    dispatch(addMessage(message));
  };
};

const composeNewSystemMessage = (messageSubject = '', data) => {
  const date = new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  });
  const id = Math.floor(Math.random() * 1000000);
  const type = 'system';
  let text = '';

  switch (messageSubject) {
    case 'new user connected': {
      text = `${data} connected`;
      break;
    }

    case 'user disconnected': {
      text = `${data} disconnected`;
      break;
    }

    default:
      text = `${data}`;
  }

  return dispatch => {
    const message = { id, text, date, type };

    dispatch(addMessage(message));
  };
};

export default {
  addMessage,
  composeNewMessage,
  composeNewSystemMessage,
};
