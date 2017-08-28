import React from 'react';
import PropTypes from 'prop-types';

import styles from './Users.sass';


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Title';
    this.users = [
      {
        id: 1,
        name: 'Corey Taylor',
        avatar: 1
      },
      {
        id: 2,
        name: 'Chester Bennington',
        avatar: 1
      },
      {
        id: 3,
        name: 'Wayne Static',
        avatar: 1
      }
    ];
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
  <ul className={styles.usersList}>
    {users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ))}
  </ul>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired
  }))
};

export default Users;
