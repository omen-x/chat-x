import { connect } from 'react-redux';

import Login from './Login';
import { actions as userActions } from 'client/User'; // eslint-disable-line
import { loginUser, showLoader, hideLoader, hideFormError } from './LoginActions';

const { updateUserData } = userActions;


const mapStateToProps = state => ({
  errorMessage: state.login.errorMessage,
  loading: state.login.loading
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
  loginUser: (userData) => {
    dispatch(loginUser(userData));
  },
  hideFormError: () => {
    dispatch(hideFormError());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
