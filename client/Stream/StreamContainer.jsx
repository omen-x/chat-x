import { connect } from 'react-redux';

import Stream from './Stream';

const mapStateToProps = state => ({
  messages: state.messages,
  userId: state.user.id,
});

export default connect(mapStateToProps)(Stream);
