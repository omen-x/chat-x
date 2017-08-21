import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';

import styles from './Login.sass';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: '',
        password: '',
      },
      errors: {
        email: false,
        password: false,
      }
    };
  }

  componentDidMount() {
    this.emailInput.focus();
  }

  /**
   * Client side validation
   * @param  {object} fields
   * @return {bool}
   */
  validateForm = (fields) => {
    let correct = true;

    Object.keys(fields).map((field) => {
      if (fields[field] === '') {
        correct = false;

        this.setState(state => ({
          errors: {
            ...state.errors,
            [field]: true
          }
        }));
      }
    });

    return correct;
  }

  // serializes data from the form and pass to action
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const { loginUser, showLoader, hideLoader, hideFormError } = this.props;
    let { email, password } = this.state.fields;

    hideFormError();
    showLoader();

    // normalize
    email = email.trim();


    if (this.validateForm(this.state.fields)) {
      // send to the server
      email = encodeURIComponent(email);
      password = encodeURIComponent(password);
      const serverUserData = `email=${email}&password=${password}`;

      loginUser(serverUserData);

      // reset form
      this.setState({
        fields: {
          email: '',
          password: '',
        }
      });
      form.reset();
    } else hideLoader();
  }

  handleFormChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(state => ({
      fields: {
        ...state.fields,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: false
      }
    }));
  }

  render() {
    const { in: inProp, errorMessage, loading } = this.props;
    const { errors } = this.state;
    const { email, password } = this.state.fields;
    const formStyles = cx(styles.login, { [styles.login_loading]: loading });

    return (
      <CSSTransition
        in={inProp}
        timeout={2500}
        classNames="fadeToBottom"
      >
        <form onSubmit={this.handleSubmit} className={formStyles}>
          <h2>Login</h2>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <div className={styles.fieldsText}>
            <input
              type="email"
              name="email"
              className={errors.email && styles.errorField}
              value={email}
              onChange={this.handleFormChange}
              placeholder="Email"
              ref={(input) => { this.emailInput = input; }}
            />
            <input
              type="password"
              name="password"
              className={errors.password && styles.errorField}
              value={password}
              onChange={this.handleFormChange}
              placeholder="Password"
              ref={(input) => { this.passwordInput = input; }}
            />
          </div>
          <button className="btn-accent">Connect</button>
          <Link to="/" className={styles.loginLink}>
            SignUp
          </Link>
        </form>
      </CSSTransition>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
  hideFormError: PropTypes.func.isRequired,
  in: PropTypes.bool.isRequired
};

Login.defaultProps = {
  in: false
};


export default Login;
