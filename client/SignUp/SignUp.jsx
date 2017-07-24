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
  // need some validation
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const { setUserData, authenticateUser, history } = this.props;
    const tempUserId = Math.floor(Math.random() * 1000000);

    const userData = {
      id: tempUserId,
      name: capitalizeFirstLetter(form.name.value),
      secondName: capitalizeFirstLetter(form.secondName.value),
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
    const { in: inProp } = this.props;

    return (
      <CSSTransition
        in={inProp}
        timeout={2500}
        classNames="fadeToBottom"
      >
        <form onSubmit={this.handleSubmit} className={styles.signUp}>
          <h2>Sign Up</h2>
          <div className={styles.fieldsText}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="text" name="secondName" placeholder="Your second name" required />
          </div>
          <h3>Select an avatar</h3>
          <ul className={styles.fieldsRadio}>
            {avatars.map((ava, i) => (
              <li key={ava}>
                <input type="radio" id={`ava-${i + 1}`} name="avatar" value={i + 1} />
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
  history: PropTypes.object.isRequired, // eslint-disable-line
  in: PropTypes.bool.isRequired
};


export default SignUp;
