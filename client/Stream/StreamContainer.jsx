// import React from 'react';
import { connect } from 'react-redux';

import Stream from './Stream';
// import { addMessage } from './StreamActions';


const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Stream);
