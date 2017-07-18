import React from 'react';
import { func } from 'prop-types';

import styles from './NewMessage.sass';


// TODO: validation for form

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      errors: {
        text: false
      }
    };
  }

  handleChangeText = (event) => {
    const newText = event.target.value;

    this.setState(() => ({ text: newText }));
  }

  /**
   * Extract the validation to a pure function
   * @param  {string} text - input value
   * @return {bool}      - validation result
   */
  validateForm = (text) => {
    if (text === '') return false;
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { newMessage } = this.props;
    const { text } = this.state;

    if (this.validateForm(text)) {
      newMessage(text);
      this.setState(() => ({ text: '' }));
    } else {
      this.setState(() => ({
        errors: { text: true }
      }));
    }
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
