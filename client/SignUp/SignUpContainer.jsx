import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from './SignUp';
// import { modules as appModules, actions as appActions } from 'client/App'; // eslint-disable-line


// const { Auth } = appModules;
// const { setUserData } = appActions;

// extracts logic from SignUp
class SignUpContainer extends React.Component {
  authenticateUser = (name) => {
    Auth.authenticateUser(name);
  }

  render() {
    const { setUserData: setUserDataProp, history } = this.props;

    return (
      <SignUp
        setUserData={setUserDataProp}
        authenticateUser={this.authenticateUser}
        history={history}
      />
    );
  }
}

SignUpContainer.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line
};


const mapDispatchToProps = dispatch => ({
  setUserData: (data) => {
    dispatch(setUserData(data));
  }
});


export default withRouter(connect(null, mapDispatchToProps)(SignUpContainer));
