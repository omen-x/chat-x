import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DashboardHeader from './DashboardHeader';
import { actions as userActions } from 'client/User'; // eslint-disable-line

const { deauthenticateUser } = userActions;


const mapStateToProps = state => ({
  userName: state.user.name
});

const mapDispatchToProps = dispatch => ({
  deauthenticateUser: () => {
    dispatch(deauthenticateUser());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardHeader));
