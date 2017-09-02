import React from 'react';
import PropTypes from 'prop-types';

import styles from './Users.sass';
import UsersList from './components/UsersList';

const Users = ({ users, loading }) => (
  <div className={styles.users}>
    <UsersHeader />
    {loading === true ? (
      <div className="loader" />
    ) : (
      <UsersList users={users} />
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
  loading: PropTypes.bool.isRequired,
};

// ========>> USERS HEADER <<========

const UsersHeader = () => (
  <div className={styles.usersHeader}>
    <p>Users</p>
  </div>
);

export default Users;
