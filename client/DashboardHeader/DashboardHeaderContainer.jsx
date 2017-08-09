import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DashboardHeader from './DashboardHeader';
import { actions as userActions } from 'client/User'; // eslint-disable-line

const { deauthenticateUser } = userActions;


class DashboardHeaderContainer extends React.Component {
  deauthenticateUser = () => {
    const { deauthenticateUser: deauthenticateUserProp, history } = this.props;

    deauthenticateUserProp();
    history.push('/');
  }

  render() {
    const { userName } = this.props;

    return (
      <DashboardHeader
        userName={userName}
        deauthenticateUser={this.deauthenticateUser}
      />
    );
  }
}

DashboardHeaderContainer.propTypes = {
  userName: PropTypes.string.isRequired,
  deauthenticateUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line
};


const mapStateToProps = state => ({
  userName: state.user.name
});

const mapDispatchToProps = dispatch => ({
  deauthenticateUser: () => {
    dispatch(deauthenticateUser());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardHeaderContainer));
