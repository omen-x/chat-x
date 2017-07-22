import { connect } from 'react-redux';

import NewMessage from './NewMessage';
import { actions as streamActions } from 'client/Stream'; // eslint-disable-line


const { newMessage } = streamActions;


const mapDispatchToProps = dispatch => ({
  newMessage: (text) => {
    dispatch(newMessage(text));
  }
});

const NewMessageContainer = connect(null, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
