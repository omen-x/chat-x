import React from 'react';

import DashboardHeader from 'client/DashboardHeader/DashboardHeader'; // eslint-disable-line
import Stream from 'client/Stream/Stream'; // eslint-disable-line
import NewMessage from 'client/NewMessage/NewMessage'; // eslint-disable-line

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    return (
      <div>
        <DashboardHeader />
      </div>
    );
  }
}

export default Dashboard;
