import React from 'react';

import DashboardHeader from 'client/DashboardHeader'; // eslint-disable-line
import Stream from 'client/Stream'; // eslint-disable-line
import NewMessage from 'client/NewMessage'; // eslint-disable-line
import styles from './Dashboard.sass';


const Dashboard = () => (
  <div className={styles.dashboard}>
    <DashboardHeader />
    <Stream />
    <NewMessage />
  </div>
);


export default Dashboard;
