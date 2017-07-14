import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import Message from 'client/Message/Message'; // eslint-disable-line
import styles from './Stream.sass';


class Stream extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    const { messages } = this.props;
    console.log(messages);

    return (
      <div className={styles.header}>
        {
          messages.map(msg => (
            <Message
              key={msg.author}
              author={msg.author}
              avatar={msg.avatar}
              text={msg.text}
              date={msg.date}
            />
          ))
        }
      </div>
    );
  }
}

Stream.propTypes = {
  messages: arrayOf(shape({
    author: string,
    avatar: number,
    text: string,
    date: string
  })).isRequired
};


export default Stream;
