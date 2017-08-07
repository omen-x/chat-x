
const userInitState = {
  id: 1,
  name: 'Denis',
  secondName: 'Volok',
  fullName: 'Denis Volok',
  avatar: 1,
  isUserConnected: false,
  isUserAuthenticated: false
};

const user = (state = userInitState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA': {
      return Object.assign({}, state, action.data);
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
