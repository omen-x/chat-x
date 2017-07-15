import React from 'react';

import Users from 'client/Users/Users'; // eslint-disable-line
import Dashboard from 'client/Dashboard/Dashboard'; // eslint-disable-line
import styles from './Chat.sass';


class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    return (
      <div className={styles.chat}>
{/*        <Users />
*/}        <Dashboard />
      </div>
    );
  }
}

export default Chat;
