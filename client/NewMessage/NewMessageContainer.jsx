import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { socket } from 'modules'; // eslint-disable-line
import NewMessage from './NewMessage';

class NewMessageContainer extends React.Component {
  /**
   * Composes a new message from the current user
   * and sends a message through the socket to the server
   * to get an id
   * @param  {String} text - NewMessage text
   */
  composeNewMessage = (text = '') => {
    const { authorAvatar, authorId, author } = this.props;
    const date = new Date().toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    });
    const type = 'user';
    const messageData = { author, authorId, authorAvatar, text, date, type };

    socket.emit('new message', messageData);
  };

  render() {
    return <NewMessage composeNewMessage={this.composeNewMessage} />;
  }
}

NewMessageContainer.propTypes = {
  authorAvatar: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  authorAvatar: state.user.avatar,
  author: state.user.name,
  authorId: state.user.id,
});

export default connect(mapStateToProps)(NewMessageContainer);
