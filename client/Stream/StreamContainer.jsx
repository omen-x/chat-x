import { connect } from 'react-redux';

import Stream from './Stream';

const mapStateToProps = state => ({
  messages: state.messages,
  userName: state.user.name,
});

export default connect(mapStateToProps)(Stream);
