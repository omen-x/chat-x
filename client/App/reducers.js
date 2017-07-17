import { combineReducers } from 'redux';

// ========>> COMPONENT REDUCERS <<========
import StreamReducer from 'client/Stream/StreamReducer'; // eslint-disable-line


// ========>> USER REDUCER <<========

const userInitState = {
  name: 'Denis',
  secondName: 'Volok',
  avatar: 1
};

const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// ========>> COMBINE REDUCERS <<========

export default combineReducers({
  user: userReducer,
  messages: StreamReducer,
});

