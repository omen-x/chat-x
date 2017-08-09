
const userInitState = {
  id: 1,
  name: '',
  email: '',
  avatar: 1,
  isUserConnected: false,
  isUserAuthenticated: false
};

const user = (state = userInitState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA': {
      return Object.assign({}, state, action.data);
    }

    case 'AUTHENTICATE_USER': {
      return Object.assign({}, state, action.user);
    }

    case 'DEAUTHENTICATE_USER': {
      return {
        ...state,
        isUserAuthenticated: false
      };
    }

    case 'CONNECT_USER': {
      return {
        ...state,
        isUserConnected: true
      };
    }

    default:
      return state;
  }
};

export default user;
