import { socket } from 'modules'; // eslint-disable-line


const addMessage = (message = {}) => ({
  type: 'ADD_MESSAGE',
  message
});

// composes a new message from current user
// we'll use redux-thunk to access user info(avatar, name)
// and call another action with a composed message
const newMessage = (text = '') => {
  const date = new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric'
  });


  return (dispatch, getState) => {
    const { avatar, name, id: authorId } = getState().user;
    const author = name;
    const id = Math.floor(Math.random() * 1000000);
    const message = { id, author, authorId, avatar, text, date };


    // send to server
    socket.emit('new message', message);

    // save in store
    dispatch(addMessage(message));
  };
};


export default {
  addMessage,
  newMessage
};
