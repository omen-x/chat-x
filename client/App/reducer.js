import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// ========>> REDUCERS FROM MODULES <<========
import { reducer as streamReducer } from 'client/Stream'; // eslint-disable-line
import { reducer as userReducer } from 'client/User'; // eslint-disable-line
import { reducer as signUpReducer } from 'client/SignUp'; // eslint-disable-line


// ========>> COMBINE REDUCERS <<========

export default combineReducers({
  user: userReducer,
  messages: streamReducer,
  signUp: signUpReducer,
  router: routerReducer
});

