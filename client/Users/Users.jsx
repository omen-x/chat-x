import React from 'react';
import PropTypes from 'prop-types';

import styles from './Users.sass';
import UsersList from './components/UsersList';

const Users = ({ users }) => (
  <div className={styles.users}>
    <UsersHeader />
    {users.length > 0 ? (
      <UsersList users={users} />
    ) : (
      <p className={styles.emptyText}>Forever alone...</p>
    )}
  </div>
);

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// ========>> USERS HEADER <<========

const UsersHeader = () => (
  <div className={styles.usersHeader}>
    <p>Users</p>
  </div>
);

export default Users;
