import { Auth } from 'modules'; // eslint-disable-line


// ========>> USER <<========

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
  setUserData,
  deauthenticateUser
};
