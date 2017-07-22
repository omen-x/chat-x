import { combineReducers } from 'redux';

// ========>> COMPONENT REDUCERS <<========
import { messages as streamReducer } from 'client/Stream'; // eslint-disable-line


// ========>> USER REDUCER <<========

const userInitState = {
  id: 1,
  name: 'Denis',
  secondName: 'Volok',
  avatar: 1,
  isUserAuthenticated: false
};

const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA': {
      return Object.assign({}, state, action.data);
    }

    default:
      return state;
  }
};


// ========>> COMBINE REDUCERS <<========

export default combineReducers({
  user: userReducer,
  messages: streamReducer,
});

