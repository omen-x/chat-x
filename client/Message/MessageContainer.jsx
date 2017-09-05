import { connect } from 'react-redux';

import Message from './Message';

const mapStateToProps = state => ({
  userId: state.user.id,
});

export default connect(mapStateToProps)(Message);
