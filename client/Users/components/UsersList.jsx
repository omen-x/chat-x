import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from '../Users.sass';

const UsersList = ({ users }) => (
  <div className={styles.usersList}>
    {users.length > 0 ? (
      <TransitionGroup>
        {users.map(user => (
          <CSSTransition key={user.id} timeout={400} classNames="toRightBounce">
            <p className={styles.user}>{user.name}</p>
          </CSSTransition>
        ))}
      </TransitionGroup>
    ) : (
      <p className={styles.emptyText}>Forever alone...</p>
    )}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default UsersList;
