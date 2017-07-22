import React from 'react';
import PropTypes from 'prop-types';

import styles from './DashBoardHeader.sass';


const DashboardHeader = ({ userName }) => (
  <div className={styles.header}>
    <p>{userName}</p>
  </div>
);


DashboardHeader.propTypes = {
  userName: PropTypes.string.isRequired
};


export default DashboardHeader;
