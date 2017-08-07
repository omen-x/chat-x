import { Auth, socket } from 'modules'; // eslint-disable-line


// ========>> USER <<========

const connectUser = () => {
  socket.connect();

  return {
    type: 'CONNECT_USER'
  };
};

const setUserData = data => ({
  type: 'SET_USER_DATA',
  data
});

const deauthenticateUser = () => {
  Auth.deauthenticateUser();

  return {
    type: 'DEAUTHENTICATE_USER'
  };
};


// ========>> EXPORTS <<========

export default {
  connectUser,
  setUserData,
  deauthenticateUser
};
