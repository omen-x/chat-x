import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './SystemMessage.sass';

const SystemMessage = ({ text, date, in: inProp }) => (
  <CSSTransition in={inProp} timeout={500} classNames="fadeToTop">
    <div className={styles.message}>
      <p className={styles.text}>{text}</p>
      <span className={styles.date}>{date}</span>
    </div>
  </CSSTransition>
);

SystemMessage.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  in: PropTypes.bool.isRequired,
};

SystemMessage.defaultProps = {
  in: false
};

export default SystemMessage;
