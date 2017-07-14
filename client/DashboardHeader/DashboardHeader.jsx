import React from 'react';

import styles from './DashBoardHeader.sass';
import { colors } from 'client/App/App'; //eslint-disable-line


class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    return (
      <div className={styles.header}>
        <p>Denis Volok</p>
      </div>
    );
  }
}

export default DashboardHeader;
