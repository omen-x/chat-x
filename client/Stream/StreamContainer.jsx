import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Stream from './Stream';
import { socket } from 'modules'; // eslint-disable-line
import { addMessage } from './StreamActions';


class StreamContainer extends React.Component {
  componentDidMount() {
    const { addMessage } = this.props;

    socket.on('new message', (msg) => {
      addMessage(msg);
    });
  }

  render() {
    const { messages, userName } = this.props;

    return (
      <Stream
        messages={messages}
        userName={userName}
      />
    );
  }
}

StreamContainer.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,
  addMessage: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  messages: state.messages,
  userName: `${state.user.name} ${state.user.secondName}`
});

const mapDispatchToProps = dispatch => ({
  addMessage: (msg) => {
    dispatch(addMessage(msg))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(StreamContainer);
