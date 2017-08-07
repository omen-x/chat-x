import React from 'react';

import styles from './Users.sass';


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
    this.users = [];
  }

  render() {
    return (
      <div className={styles.users}>
        <UsersHeader />
        <UsersList users={this.users} />
      </div>
    );
  }
}


// ========>> USERS HEADER <<========

const UsersHeader = () => (
  <div className={styles.usersHeader}>
    <p>Users</p>
  </div>
);


// ========>> USERS LIST <<========


const UsersList = ({ users }) => (
  <ul>
    {users.map((user, i) => (
      <li key={user.id}>
        {user.fullName}
      </li>
    ))}
  </ul>
);


export default Users;
