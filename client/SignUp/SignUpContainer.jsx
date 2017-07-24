import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from './SignUp';
import { actions as userActions } from 'client/User'; // eslint-disable-line
import { Auth } from 'modules'; // eslint-disable-line

const { setUserData } = userActions;


// extracts logic from SignUp
class SignUpContainer extends React.Component {
  authenticateUser = (name) => {
    Auth.authenticateUser(name);
  }

  render() {
    const { setUserData: setUserDataProp, history, in: inProp } = this.props;

    return (
      <SignUp
        setUserData={setUserDataProp}
        authenticateUser={this.authenticateUser}
        history={history}
        in={inProp}
      />
    );
  }
}

SignUpContainer.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  in: PropTypes.bool.isRequired
};

SignUpContainer.defaultProps = {
  in: false
};


const mapDispatchToProps = dispatch => ({
  setUserData: (data) => {
    dispatch(setUserData(data));
  }
});


export default withRouter(connect(null, mapDispatchToProps)(SignUpContainer));
