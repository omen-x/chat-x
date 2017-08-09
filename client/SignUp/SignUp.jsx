import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './SignUp.sass';
import { capitalizeFirstLetter } from 'helpers'; // eslint-disable-line

// dude pls
import avatar1 from 'decor/avatars/ava-1.png'// eslint-disable-line
import avatar2 from 'decor/avatars/ava-2.png'// eslint-disable-line
import avatar3 from 'decor/avatars/ava-3.png'// eslint-disable-line
import avatar4 from 'decor/avatars/ava-4.png'// eslint-disable-line
import avatar5 from 'decor/avatars/ava-5.png'// eslint-disable-line

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

import { store } from 'client/index';// eslint-disable-line

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      avatar: 0,
      error: false
    };
  }

  // serializes form data and pass to action
  // need some validation
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const { updateUserData, signupUser } = this.props;
    let { name, email, avatar, password } = this.state;

    avatar = parseInt(avatar, 10);

    // Validation must be here
    name = name.trim();
    email = email.trim();

    if (name === '' || email === '' || password === '') this.setState({ errors: true });
    else {
      // save in the store
      // const storeUserData = {
      //   name,
      //   email,
      //   avatar
      // };

      // updateUserData(storeUserData);

      // send to the server
      name = encodeURIComponent(name);
      email = encodeURIComponent(email);
      password = encodeURIComponent(password);
      const serverUserData = `name=${name}&email=${email}&password=${password}&avatar=${avatar}`;

      signupUser(serverUserData);


      // authenticateUser(fullName);

      this.setState({
        name: '',
        email: '',
        password: '',
        avatar: 0
      });
      form.reset();
    }
  }

  handleFormChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { in: inProp } = this.props;
    const { name, email, password, avatar, errors } = this.state;

    return (
      <CSSTransition
        in={inProp}
        timeout={2500}
        classNames="fadeToBottom"
      >
        <form onSubmit={this.handleSubmit} className={styles.signUp}>
          <h2>Sign Up</h2>

          {errors && (<p className={styles.error}>Something is wrong</p>)}

          <div className={styles.fieldsText}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleFormChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleFormChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleFormChange}
              placeholder="Password"
            />
          </div>
          <h3>Select an avatar</h3>
          <ul className={styles.fieldsRadio}>
            {avatars.map((ava, i) => (
              <li key={i}>
                <input
                  type="radio"
                  id={`ava-${i + 1}`}
                  name="avatar"
                  checked={i + 1 === parseInt(avatar, 10)}
                  onChange={this.handleFormChange}
                  value={i + 1}
                />
                <label htmlFor={`ava-${i + 1}`}>
                  <img src={ava} alt="avatar" />
                </label>
              </li>
              ))
            }
          </ul>
          <button className="btn-accent">Connect</button>
        </form>
      </CSSTransition>
    );
  }
}

SignUp.propTypes = {
  updateUserData: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  authenticateUser: PropTypes.func.isRequired,
  in: PropTypes.bool.isRequired
};


export default SignUp;
