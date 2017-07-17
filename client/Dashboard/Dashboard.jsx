import React from 'react';

import DashboardHeader from 'client/DashboardHeader/DashboardHeader'; // eslint-disable-line
import StreamContainer from 'client/Stream/StreamContainer'; // eslint-disable-line
import NewMessageContainer from 'client/NewMessage/NewMessageContainer'; // eslint-disable-line
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
        <NewMessageContainer />
      </div>
    );
  }
}

export default Dashboard;
