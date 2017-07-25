import { connect } from 'react-redux';

import Message from './Message';


const mapStateToProps = state => ({
  userFullName: state.user.fullName
});


export default connect(mapStateToProps)(Message);
