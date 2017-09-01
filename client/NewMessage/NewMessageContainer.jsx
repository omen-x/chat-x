import { connect } from 'react-redux';

import NewMessage from './NewMessage';
import { actions as streamActions } from 'client/Stream'; // eslint-disable-line


const { composeNewMessage } = streamActions;


const mapDispatchToProps = dispatch => ({
  newMessage: (text) => {
    dispatch(composeNewMessage(text));
  }
});

const NewMessageContainer = connect(null, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
