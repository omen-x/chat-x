import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Users.sass';


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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired
  })).isRequired
};


export default UsersList;
