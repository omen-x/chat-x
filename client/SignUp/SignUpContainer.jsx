import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from './SignUp';
import { actions as userActions } from 'client/User'; // eslint-disable-line
import { Auth, socket } from 'modules'; // eslint-disable-line
import { signupUser } from './SignUpActions';

const { updateUserData } = userActions;


const mapStateToProps = state => ({
  errorMessage: state.signUp.errorMessage
});

const mapDispatchToProps = dispatch => ({
  updateUserData: (data) => {
    dispatch(updateUserData(data));
  },
  signupUser: (userData) => {
    dispatch(signupUser(userData));
  }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
