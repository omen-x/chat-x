import React from 'react';

import styles from './Stream.sass';


class Stream extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    return (
      <div className={styles.header}>stream</div>
    );
  }
}

export default Stream;
