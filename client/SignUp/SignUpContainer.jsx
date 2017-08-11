import { connect } from 'react-redux';

import SignUp from './SignUp';
import { actions as userActions } from 'client/User'; // eslint-disable-line
import { signupUser, showLoader, hideLoader, hideFormError } from './SignUpActions';

const { updateUserData } = userActions;


const mapStateToProps = state => ({
  errorMessage: state.signUp.errorMessage,
  loading: state.signUp.loading
});

const mapDispatchToProps = dispatch => ({
  showLoader: () => {
    dispatch(showLoader());
  },
  hideLoader: () => {
    dispatch(hideLoader());
  },
  updateUserData: (data) => {
    dispatch(updateUserData(data));
  },
  signupUser: (userData) => {
    dispatch(signupUser(userData));
  },
  hideFormError: () => {
    dispatch(hideFormError());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
