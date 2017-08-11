import { connect } from 'react-redux';

import Chat from './Chat';
import { actions as userActions } from 'client/User'; // eslint-disable-line

const { fetchUserData } = userActions;


const mapDispatchToProps = dispatch => ({
  fetchUserData: () => {
    dispatch(fetchUserData());
  }
});


export default connect(null, mapDispatchToProps)(Chat);
