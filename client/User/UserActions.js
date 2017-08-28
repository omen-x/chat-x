import { push } from 'react-router-redux';

import { Auth, socket } from 'modules'; // eslint-disable-line
import { actions as streamActions } from 'client/Stream'; // eslint-disable-line

const { addMessage } = streamActions;


// ========>> USER <<========

const connectUser = (user) => {
  socket.connect(user);

  return (dispatch) => {
    // attach socket handlers
    socket.on('new message', (msg) => {
      dispatch(addMessage(msg));
    });

    socket.on('online users', (users) => {
      console.log('users', users);
    });
  };
};


const updateUserData = data => ({
  type: 'UPDATE_USER_DATA',
  data
});


const authenticateUser = (token, user) => {
  Auth.authenticateUser(token);
  // socket.connect();

  return (dispatch) => {
    dispatch(connectUser());

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
        dispatch(connectUser(data));
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
