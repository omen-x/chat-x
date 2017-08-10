import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { socket } from 'modules'; // eslint-disable-line
import Users from 'client/Users'; // eslint-disable-line
import Dashboard from 'client/Dashboard'; // eslint-disable-line
import styles from './Chat.sass';


class Chat extends React.Component {
  componentDidMount() {
    const { fetchInitData } = this.props;

    fetchInitData();
  }

  render() {
    const { in: inProp } = this.props;

    return (
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
  }
}


Chat.propTypes = {
  in: PropTypes.bool.isRequired,
  fetchInitData: PropTypes.func.isRequired
};

Chat.defaultProps = {
  in: false
};


export default Chat;
