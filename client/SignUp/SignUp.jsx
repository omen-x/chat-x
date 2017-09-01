import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';

import styles from './SignUp.sass';

// pls
import avatar1 from 'decor/avatars/ava-1.png'; // eslint-disable-line
import avatar2 from 'decor/avatars/ava-2.png'; // eslint-disable-line
import avatar3 from 'decor/avatars/ava-3.png'; // eslint-disable-line
import avatar4 from 'decor/avatars/ava-4.png'; // eslint-disable-line
import avatar5 from 'decor/avatars/ava-5.png'; // eslint-disable-line

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: '',
        email: '',
        password: '',
        avatar: 1,
      },
      errors: {
        name: false,
        email: false,
        password: false,
        avatar: false,
      },
    };
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  /**
   * Client side validation
   * @param  {object} fields
   * @return {bool}
   */
  validateForm = fields => {
    let correct = true;

    Object.keys(fields).map(field => {
      if (fields[field] === '') {
        correct = false;

        this.setState(state => ({
          errors: {
            ...state.errors,
            [field]: true,
          },
        }));
      }
    });

    return correct;
  };

  // serializes data from the form and pass to action
  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { signupUser, showLoader, hideLoader, hideFormError } = this.props;
    let { name, email, avatar, password } = this.state.fields;

    hideFormError();
    showLoader();

    // normalize
    avatar = parseInt(avatar, 10);
    name = name.trim();
    email = email.trim();

    if (this.validateForm(this.state.fields)) {
      // send to the server
      name = encodeURIComponent(name);
      email = encodeURIComponent(email);
      password = encodeURIComponent(password);
      const serverUserData = `name=${name}&email=${email}&password=${password}&avatar=${avatar}`;

      signupUser(serverUserData);

      // reset form
      this.setState({
        fields: {
          name: '',
          email: '',
          password: '',
          avatar: 1,
        },
      });
      form.reset();
    } else hideLoader();
  };

  handleFormChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(state => ({
      fields: {
        ...state.fields,
        [name]: value,
      },
      errors: {
        ...state.errors,
        [name]: false,
      },
    }));
  };

  render() {
    const { in: inProp, errorMessage, loading } = this.props;
    const { errors } = this.state;
    const { name, email, password, avatar } = this.state.fields;
    const formStyles = cx(styles.signUp, { [styles.signUp_loading]: loading });

    return (
      <CSSTransition in={inProp} timeout={2500} classNames="fadeToBottom">
        <form onSubmit={this.handleSubmit} className={formStyles}>
          <h2>Sign Up</h2>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <div className={styles.fieldsText}>
            <input
              type="text"
              name="name"
              className={errors.name && styles.errorField}
              value={name}
              onChange={this.handleFormChange}
              placeholder="Name"
              ref={input => {
                this.nameInput = input;
              }}
            />
            <input
              type="email"
              name="email"
              className={errors.email && styles.errorField}
              value={email}
              onChange={this.handleFormChange}
              placeholder="Email"
              ref={input => {
                this.emailInput = input;
              }}
            />
            <input
              type="password"
              name="password"
              className={errors.password && styles.errorField}
              value={password}
              onChange={this.handleFormChange}
              placeholder="Password"
              ref={input => {
                this.passwordInput = input;
              }}
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
            ))}
          </ul>
          <button className="btn-accent">Connect</button>
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        </form>
      </CSSTransition>
    );
  }
}

SignUp.propTypes = {
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  signupUser: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
  hideFormError: PropTypes.func.isRequired,
  in: PropTypes.bool.isRequired,
};

SignUp.defaultProps = {
  in: false,
};

export default SignUp;
