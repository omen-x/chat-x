import React from 'react';
import PropTypes from 'prop-types';

import styles from './SignUp.sass';


class SignUp extends React.Component {
  // need some validation
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const { setUserData, authenticateUser, history } = this.props;
    const tempUserId = Math.floor(Math.random() * 1000000);

    const userData = {
      id: tempUserId,
      name: form.name.value,
      secondName: form.secondName.value,
      avatar: parseInt(form.avatar.value, 10)
    };

    // temp token for user authentication
    const name = `${userData.name}&${userData.secondName}`;

    setUserData(userData);
    authenticateUser(name);
    history.push('/');

    form.reset();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.signUp}>
        <h2>Sign Up</h2>
        <div className={styles.fieldsText}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="text" name="secondName" placeholder="Your second name" required />
        </div>
        <h3>Choose avatar</h3>
        <div className={styles.fieldsRadio}>
          <input type="radio" name="avatar" value="1" />
          <input type="radio" name="avatar" value="2" />
          <input type="radio" name="avatar" value="3" />
          <input type="radio" name="avatar" value="4" />
          <input type="radio" name="avatar" value="5" />
        </div>
        <button className="btn-accent">Connect</button>
      </form>
    );
  }
}

SignUp.propTypes = {
  setUserData: PropTypes.func.isRequired,
  authenticateUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line
};


export default SignUp;


// save token

