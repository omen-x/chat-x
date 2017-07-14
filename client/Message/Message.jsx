import React from 'react';
import { string, number } from 'prop-types';

import styles from './Message.sass';

const Message = ({ author, avatar, text, date }) => (
  <div className={styles.message}>
    <p>{author}</p>
    <p>{text}</p>
    <p>{date}</p>
  </div>
);

Message.propTypes = {
  author: string.isRequired,
  avatar: number.isRequired,
  text: string.isRequired,
  date: string.isRequired
};


export default Message;
