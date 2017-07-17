import React from 'react';
import { func } from 'prop-types';

import styles from './NewMessage.sass';


// TODO: validation for form

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChangeText = (event) => {
    const newText = event.target.value;

    this.setState(() => ({ text: newText }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { newMessage } = this.props;
    const { text } = this.state;

    newMessage(text);
    this.setState(() => ({ text: '' }));
  }


  render() {
    const { text } = this.state;

    return (
      <div className={styles.newMessage}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={this.handleChangeText}
          />
          <input
            type="submit"
            value=""
          />
        </form>
      </div>
    );
  }
}

NewMessage.propTypes = {
  newMessage: func.isRequired
};


export default NewMessage;
