import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Scroll from 'react-scroll';

import Message from 'client/Message'; // eslint-disable-line
import styles from './Stream.sass';


// Stream of messages
// TODO:
// -replays user check (scrolling) with ID

class Stream extends React.Component {

  componentDidUpdate() {
    const { userName, messages } = this.props;
    // author of the last added message
    const newMessageAuthor = messages.slice(-1)[0].author;

    // if the current user adds a message, scroll down
    if (userName === newMessageAuthor) this.scrollToBottom();
  }

  scrollToBottom = () => {
    Scroll.animateScroll.scrollToBottom({ containerId: 'stream-container' });
  }

  render() {
    const { messages } = this.props;

    return (
      <div
        className={styles.stream}
        id="stream-container"
        ref={(streamRef) => { this.streamRef = streamRef; }}
      >
        <TransitionGroup>
          {
            messages.map(msg => (
              <Message
                key={msg.id}
                author={msg.author}
                avatar={msg.avatar}
                text={msg.text}
                date={msg.date}
              />
            ))
          }
        </TransitionGroup>
      </div>
    );
  }
}

Stream.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};


export default Stream;
