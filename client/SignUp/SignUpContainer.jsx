import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from './SignUp';
import { actions as userActions } from 'client/User'; // eslint-disable-line
import { Auth, socket } from 'modules'; // eslint-disable-line

const { updateUserData, signupUser } = userActions;


const mapDispatchToProps = dispatch => ({
  updateUserData: (data) => {
    dispatch(updateUserData(data));
  },
  signupUser: (userData) => {
    dispatch(signupUser(userData));
  }
});


export default withRouter(connect(null, mapDispatchToProps)(SignUp));
