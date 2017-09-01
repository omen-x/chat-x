import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Scroll from 'react-scroll';

import Message from 'client/Message'; // eslint-disable-line
import SystemMessage from 'client/SystemMessage'; // eslint-disable-line
import styles from './Stream.sass';

// Message flow

class Stream extends React.Component {
  componentDidUpdate() {
    const { userId, messages } = this.props;
    const newMessageAuthorId = messages.slice(-1)[0].authorId;

    // if the current user adds a message, scroll down
    if (userId === newMessageAuthorId) this.scrollToBottom();
  }

  scrollToBottom = () => {
    Scroll.animateScroll.scrollToBottom({ containerId: 'stream-container' });
  };

  render() {
    const { messages } = this.props;

    return (
      <div
        className={styles.stream}
        id="stream-container"
      >
        <TransitionGroup>
          {messages.map(msg => {
            if (msg.type === 'system') {
              return (
                <SystemMessage key={msg.id} text={msg.text} date={msg.date} />
              );
            }

            return (
              <Message
                key={msg.id}
                author={msg.author}
                avatar={msg.avatar}
                text={msg.text}
                date={msg.date}
              />
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}

Stream.propTypes = {
  userId: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
      avatar: PropTypes.number,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Stream;
