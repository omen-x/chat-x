import React from 'react';
import PropTypes from 'prop-types';

import styles from './DashBoardHeader.sass';


const DashboardHeader = ({ userName, deauthenticateUser }) => (
  <div className={styles.header}>
    <p>{userName}</p>
    <button onClick={deauthenticateUser} >Sign Out</button>
  </div>
);


DashboardHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  deauthenticateUser: PropTypes.func.isRequired
};


export default DashboardHeader;
