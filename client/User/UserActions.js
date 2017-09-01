import { push } from 'react-router-redux';

import { Auth, socket } from 'modules'; // eslint-disable-line
import { actions as streamActions } from 'client/Stream'; // eslint-disable-line
import { actions as usersActions } from 'client/Users'; // eslint-disable-line

const { addMessage, composeNewSystemMessage } = streamActions;
const { addUser, removeUser, setUsers } = usersActions;


// ========>> USER <<========

const connectUser = (user) => {
  socket.connect(user);

  return (dispatch) => {
    // Attach socket handlers
    // TODO: find a better place to attach handlers

    socket.on('online users', (users) => {
      dispatch(setUsers(users));
    });

    socket.on('new message', (msg) => {
      dispatch(addMessage(msg));
    });

    socket.on('new user connected', (newUser) => {
      dispatch(addUser(newUser));
      dispatch(composeNewSystemMessage('new user connected', newUser.name));
    });

    socket.on('user disconnected', (userId, userName) => {
      dispatch(removeUser(userId));
      dispatch(composeNewSystemMessage('user disconnected', userName));
    });
  };
};


const updateUserData = user => ({
  type: 'UPDATE_USER_DATA',
  user
});


const authenticateUser = (token) => {
  Auth.authenticateUser(token);
  // socket.connect();

  return (dispatch) => {
    dispatch(push('/'));

    // data will be fetched using fetchUserData-action(when chat will be mounted)
    // dispatch(connectUser(user));
    // dispatch(updateUserData(user));
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
      .then((user) => {
        dispatch(updateUserData(user));
        dispatch(connectUser(user));
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
