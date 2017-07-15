import React from 'react';
import { string, number } from 'prop-types';

import avatar1 from 'decor/avatars/ava-1.png'// eslint-disable-line
import avatar2 from 'decor/avatars/ava-2.png'// eslint-disable-line
import avatar3 from 'decor/avatars/ava-3.png'// eslint-disable-line
import styles from './Message.sass';

const avatars = [avatar1, avatar2, avatar3];

// Single message

const Message = ({ author, avatar, text, date }) => (
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
);

Message.propTypes = {
  author: string.isRequired,
  avatar: number.isRequired,
  text: string.isRequired,
  date: string.isRequired
};


export default Message;
