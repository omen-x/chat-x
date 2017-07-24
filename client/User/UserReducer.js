
const userInitState = {
  id: 1,
  name: 'Denis',
  secondName: 'Volok',
  avatar: 1,
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

    default:
      return state;
  }
};

export default user;
