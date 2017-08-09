import { connect } from 'react-redux';

import Message from './Message';


const mapStateToProps = state => ({
  userName: state.user.name
});


export default connect(mapStateToProps)(Message);
