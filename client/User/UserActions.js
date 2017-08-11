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


const connectUser = () => {
  socket.connect();

  return {
    type: 'CONNECT_USER'
  };
};


const fetchUserData = () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `bearer ${Auth.getToken()}`
    }
  };

  return dispatch =>
    fetch('/api/user', requestOptions)
      .then((res) => {
        if (res.status !== 200) {
          const error = res.json().error;
          throw new Error(error);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(updateUserData(data));
        dispatch(connectUser());
      })
      .catch((err) => {
        console.log(`SignUp request failed: ${err}`);
      });
};


// ========>> EXPORTS <<========

export default {
  connectUser,
  updateUserData,
  authenticateUser,
  deauthenticateUser,
  fetchUserData
};
