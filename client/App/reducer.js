import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// ========>> REDUCERS FROM MODULES <<========
import { messages as streamReducer } from 'client/Stream'; // eslint-disable-line
import { user as userReducer } from 'client/User'; // eslint-disable-line


// ========>> COMBINE REDUCERS <<========

export default combineReducers({
  user: userReducer,
  messages: streamReducer,
  router: routerReducer
});

