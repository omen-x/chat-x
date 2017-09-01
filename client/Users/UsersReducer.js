const users = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS': {
      return action.users;
    }

    case 'ADD_USER': {
      return [...state, action.newUser];
    }

    case 'REMOVE_USER': {
      return state.filter(user => user.id !== action.userId);
    }

    default:
      return state;
  }
};

export default users;
