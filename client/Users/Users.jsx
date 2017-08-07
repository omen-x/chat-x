import React from 'react';

import styles from './Users.sass';


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
  }

  render() {
    return (
      <div className={styles.users}>
        <UsersHeader />
        <UsersList />
      </div>
    );
  }
}

// ========>> USERS HEADER <<========

const usersHeader = () => (
  <div className={styles.usersHeader}>
    <p>Users</p>
  </div>
);


export default Users;
