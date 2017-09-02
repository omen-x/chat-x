
const initState = {
  id: '1',
  name: '',
  email: '',
  avatar: 1,
  isUserConnected: false
};

const user = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA': {
      return Object.assign({}, state, action.user);
    }

    case 'AUTHENTICATE_USER': {
      return Object.assign({}, state, action.user);
    }

    default:
      return state;
  }
};

export default user;
