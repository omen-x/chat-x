import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Users from './Users';
import { socket } from 'modules'; // eslint-disable-line
import { setUsers } from './UsersActions';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { setUsers: setUsersProp } = this.props;

    socket.emit('get online users', users => {
      setUsersProp(users);
      setTimeout(() => {
        this.setState({ loading: false });
      }, 800);
    });
  }

  render() {
    const { users } = this.props;
    const { loading } = this.state;

    return <Users users={users} loading={loading} />;
  }
}

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => {
    dispatch(setUsers(users));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
