import { combineReducers } from 'redux';

import StreamReducer from 'client/Stream/StreamReducer'; // eslint-disable-line


export default combineReducers({
  messages: StreamReducer
});

