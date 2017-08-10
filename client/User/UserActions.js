import { push } from 'react-router-redux';
import { Auth, socket } from 'modules'; // eslint-disable-line


// ========>> USER <<========

const updateUserData = data => ({
  type: 'UPDATE_USER_DATA',
  data
});


const authenticateUser = (token, user) => {
  Auth.authenticateUser(token);
  socket.connect();

  return (dispatch) => {
    dispatch(push('/'));
    dispatch(updateUserData(user));
  };
};


// after this action, the store still have a user data
const deauthenticateUser = () => {
  Auth.deauthenticateUser();
  socket.disconnect();

  return (dispatch) => {
    dispatch(push('/'));
  };
};


const signupUser = (userData) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: userData
  };

  return (dispatch) => {
    fetch('/auth/signup', requestOptions)
      .then((res) => {
        // todo: form errors(additional action)
        if (res.status !== 200) throw new Error('Wrong status code');
        else return res.json();
      })
      .then((data) => {
        dispatch(authenticateUser(data.token, data.user));
      })
      .catch((err) => {
        console.log(`SignUp request failed: ${err}`);
      });
  };
};


const connectUser = () => {
  socket.connect();

  return {
    type: 'CONNECT_USER'
  };
};


// ========>> EXPORTS <<========

export default {
  signupUser,
  connectUser,
  updateUserData,
  deauthenticateUser
};
