
export const addMessage = (message = {}) => ({
  type: 'ADD_MESSAGE',
  message
});

// composes a new message
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
    const message = { author, avatar, text, date };

    dispatch(addMessage(message));
  };
};
