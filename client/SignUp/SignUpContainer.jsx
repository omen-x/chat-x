import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from './SignUp';
import { setUserData } from 'client/App/actions'; //eslint-disable-line
import { Auth } from 'client/App/App';


// extracts logic from SignUp
class SignUpContainer extends React.Component {
  authenticateUser = (name) => {
    Auth.authenticateUser(name);
  }

  render() {
    const { setUserData, history } = this.props;

    return (
      <SignUp
        setUserData={setUserData}
        authenticateUser={this.authenticateUser}
        history={history}
      />
    );
  }
}

SignUpContainer.propTypes = {
  setUserData: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
  setUserData: (data) => {
    dispatch(setUserData(data));
  }
});


export default withRouter(connect(null, mapDispatchToProps)(SignUpContainer));
