import React from 'react';

import Users from 'client/Users'; // eslint-disable-line
import Dashboard from 'client/Dashboard'; // eslint-disable-line
import styles from './Chat.sass';


const Chat = () => (
  <div className={styles.chat}>
    {/*<Users />*/}
    <Dashboard />
  </div>
);


export default Chat;
