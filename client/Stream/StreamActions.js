import { socket, Auth } from 'modules'; // eslint-disable-line

const addMessage = (message = {}) => ({
  type: 'ADD_MESSAGE',
  message,
});

const addMessages = (messages = []) => ({
  type: 'ADD_MESSAGES',
  messages,
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
    const { avatar: authorAvatar, name, id: authorId } = getState().user;
    const author = name;
    // const id = Math.floor(Math.random() * 1000000);
    const type = 'user';
    const messageData = { author, authorId, authorAvatar, text, date, type };

    // send to server (we must retrieve an _id for the message)
    // socket.emit('new message', messageData, (message) => {
    //   // save in store
    //   dispatch(addMessage(message));
    // });
    socket.emit('new message', messageData);
  };
};

const composeNewSystemMessage = (messageSubject = '', data) => {
  const date = new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  });
  const id = String(Math.floor(Math.random() * 1000000));
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

const fetchMessages = () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `bearer ${Auth.getToken()}`,
    },
  };

  return dispatch =>
    fetch('/api/messages', requestOptions)
      .then(res => {
        if (res.status !== 200) {
          const error = res.json().error;
          throw new Error(error);
        }
        return res.json();
      })
      .then(messages => {
        dispatch(addMessages(messages));
      })
      .catch(err => {
        console.log(`fetchMessages request failed: ${err}`);
      });
};


export default {
  addMessage,
  composeNewMessage,
  composeNewSystemMessage,
  fetchMessages,
};
