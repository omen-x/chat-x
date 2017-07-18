import React from 'react';
import { string, number, bool } from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import avatar1 from 'decor/avatars/ava-1.png'// eslint-disable-line
import avatar2 from 'decor/avatars/ava-2.png'// eslint-disable-line
import avatar3 from 'decor/avatars/ava-3.png'// eslint-disable-line
import styles from './Message.sass';

const avatars = [avatar1, avatar2, avatar3];

// Single message

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }


  render() {
    const { author, avatar, text, date } = this.props;

    return (
      <CSSTransition
        in={this.props.in}
        timeout={500}
        classNames="fade"
      >
        <div className={styles.message}>
          <div className={styles.avatar}>
            <img src={avatars[avatar - 1]} alt="User avatar" />
          </div>
          <div className={styles.content}>
            <p className={styles.author}>{author}</p>
            <span className={styles.date}>{date}</span>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

Message.propTypes = {
  author: string.isRequired,
  avatar: number.isRequired,
  text: string.isRequired,
  date: string.isRequired,
  in: bool
};

Message.defaultProps = {
  in: false
};


export default Message;
