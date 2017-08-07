import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Users from 'client/Users'; // eslint-disable-line
import Dashboard from 'client/Dashboard'; // eslint-disable-line
import styles from './Chat.sass';


const Chat = ({ in: inProp }) => (
  <CSSTransition
    in={inProp}
    timeout={2500}
    classNames="fade"
  >
    <div className={styles.chat}>
      <Users />
      <Dashboard />
    </div>
  </CSSTransition>
);

Chat.propTypes = {
  in: PropTypes.bool.isRequired
};

Chat.defaultProps = {
  in: false
};


export default Chat;
