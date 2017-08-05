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


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      secondName: '',
      avatar: 0
    };
  }

  // serializes form data and pass to action
  // need some validation
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    let { name, secondName, avatar } = this.state;
    const { setUserData, authenticateUser } = this.props;

    // replace with an id from db
    const tempUserId = Math.floor(Math.random() * 1000000);

    name = capitalizeFirstLetter(name);
    secondName = capitalizeFirstLetter(secondName);
    avatar = parseInt(avatar, 10);
    const fullName = `${name} ${secondName}`;

    const userData = {
      id: tempUserId,
      name,
      secondName,
      fullName,
      avatar
    };

    // save in the store
    setUserData(userData);
    // temp token for user authentication
    authenticateUser(fullName);

    form.reset();
  }

  handleFormChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { in: inProp } = this.props;
    const { name, secondName, avatar } = this.state;

    return (
      <CSSTransition
        in={inProp}
        timeout={2500}
        classNames="fadeToBottom"
      >
        <form onSubmit={this.handleSubmit} className={styles.signUp}>
          <h2>Sign Up</h2>
          <div className={styles.fieldsText}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleFormChange}
              placeholder="Your name"
              required
            />
            <input
              type="text"
              name="secondName"
              value={secondName}
              onChange={this.handleFormChange}
              placeholder="Your second name"
              required
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
                  checked={i + 1 == avatar}
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
  setUserData: PropTypes.func.isRequired,
  authenticateUser: PropTypes.func.isRequired,
  in: PropTypes.bool.isRequired
};


export default SignUp;
