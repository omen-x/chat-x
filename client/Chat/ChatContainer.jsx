import { connect } from 'react-redux';

import Chat from './Chat';
import { actions as userActions } from 'client/User'; // eslint-disable-line

const { fetchInitData } = userActions;


const mapDispatchToProps = dispatch => ({
  fetchInitData: () => {
    dispatch(fetchInitData());
  }
});


export default connect(null, mapDispatchToProps)(Chat);
