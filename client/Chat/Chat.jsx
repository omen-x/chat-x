import React from 'react';

import Users from 'client/Users/Users'; // eslint-disable-line
import Dashboard from 'client/Dashboard/Dashboard'; // eslint-disable-line

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    const styles = {
      maxWidth: '940px',
      margin: '0 auto'
    };

    return (
      <div style={styles}>
{/*        <Users />
*/}        <Dashboard />
      </div>
    );
  }
}

export default Chat;
