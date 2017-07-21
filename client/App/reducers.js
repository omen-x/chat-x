import { combineReducers } from 'redux';

// ========>> COMPONENT REDUCERS <<========
import StreamReducer from 'client/Stream/StreamReducer'; // eslint-disable-line


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
      console.log(Object.assign({}, state, action.data));
      return Object.assign({}, state, action.data);
    }

    default:
      return state;
  }
};


// ========>> COMBINE REDUCERS <<========

export default combineReducers({
  user: userReducer,
  messages: StreamReducer,
});

