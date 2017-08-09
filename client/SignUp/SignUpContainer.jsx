import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from './SignUp';
import { actions as userActions } from 'client/User'; // eslint-disable-line
import { Auth, socket } from 'modules'; // eslint-disable-line

const { updateUserData, signupUser } = userActions;


// extracts logic from SignUp
class SignUpContainer extends React.Component {
  authenticateUser = (name) => {
    const { history } = this.props;

    Auth.authenticateUser(name);
    socket.connect();
    history.push('/');
  }

  render() {
    const {
      updateUserData: updateUserDataProp,
      in: inProp,
      signupUser: signupUserProp } = this.props;

    return (
      <SignUp
        updateUserData={updateUserDataProp}
        signupUser={signupUserProp}
        authenticateUser={this.authenticateUser}
        in={inProp}
      />
    );
  }
}

SignUpContainer.propTypes = {
  updateUserData: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  in: PropTypes.bool.isRequired
};

SignUpContainer.defaultProps = {
  in: false
};


const mapDispatchToProps = dispatch => ({
  updateUserData: (data) => {
    dispatch(updateUserData(data));
  },
  signupUser: (userData) => {
    dispatch(signupUser(userData));
  }
});


export default withRouter(connect(null, mapDispatchToProps)(SignUpContainer));
