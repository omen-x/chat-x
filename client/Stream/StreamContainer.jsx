import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Stream from './Stream';
import { fetchMessages } from './StreamActions';

class StreamContainer extends React.Component {
  componentDidMount() {
    const { fetchMessages: fetchMessagesProp } = this.props;

    fetchMessagesProp();
  }

  render() {
    const { userId, messages } = this.props;

    return <Stream userId={userId} messages={messages} />;
  }
}

StreamContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      authorId: PropTypes.string,
      authorAvatar: PropTypes.number,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  fetchMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages,
  userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => {
    dispatch(fetchMessages());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamContainer);
