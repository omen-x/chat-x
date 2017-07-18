import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Scroll from 'react-scroll';

import Message from 'client/Message/Message'; // eslint-disable-line
import styles from './Stream.sass';


// Stream of messages
// TODO: keys, replays user check with ID

class Stream extends React.Component {

  componentDidUpdate(prevProps) {
    const { userName } = this.props;
    const newMessageAuthor = prevProps.messages.slice(-1)[0].author;

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
                key={msg.text}
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
  userName: string.isRequired,
  messages: arrayOf(shape({
    author: string,
    avatar: number,
    text: string,
    date: string
  })).isRequired
};


export default Stream;
