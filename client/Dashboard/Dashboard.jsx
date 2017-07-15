import React from 'react';

import DashboardHeader from 'client/DashboardHeader/DashboardHeader'; // eslint-disable-line
import StreamContainer from 'client/Stream/StreamContainer'; // eslint-disable-line
import NewMessage from 'client/NewMessage/NewMessage'; // eslint-disable-line
import styles from './Dashboard.sass';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    return (
      <div className={styles.dashboard}>
        <DashboardHeader />
        <StreamContainer />
        <NewMessage />
      </div>
    );
  }
}

export default Dashboard;
