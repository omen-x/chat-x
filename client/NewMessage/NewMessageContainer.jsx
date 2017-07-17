import { connect } from 'react-redux';

import NewMessage from './NewMessage';
import { newMessage } from 'client/Stream/StreamActions'; // eslint-disable-line


const mapDispatchToProps = dispatch => ({
  newMessage: (text) => {
    dispatch(newMessage(text));
  }
});

const NewMessageContainer = connect(null, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
