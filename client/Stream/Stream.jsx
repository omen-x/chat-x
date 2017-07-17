import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import Message from 'client/Message/Message'; // eslint-disable-line
import styles from './Stream.sass';


// Stream of messages
// TODO: keys

const Stream = ({ messages }) => (
  <div className={styles.stream}>
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
  </div>
);


Stream.propTypes = {
  messages: arrayOf(shape({
    author: string,
    avatar: number,
    text: string,
    date: string
  })).isRequired
};


export default Stream;
