import { actions as userActions } from 'client/User'; // eslint-disable-line


const { authenticateUser } = userActions;


// ========>> SIGN UP <<========

const setFormError = error => ({
  type: 'SET_FORM_ERROR_MESSAGE',
  error
});


const signupUser = (userData) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: userData
  };

  return dispatch =>
    fetch('/auth/signup', requestOptions)
      .then((res) => {
        if (res.status !== 200) {
          return res.json().then((error) => {
            // console.log(error);
            dispatch(setFormError(error));
          });
        }
        return res.json().then((data) => {
          dispatch(authenticateUser(data.token, data.user));
        });
      })
      .catch((err) => {
        console.log(`SignUp request failed: ${err}`);
      });
};


// ========>> EXPORT <<========

export default {
  setFormError,
  signupUser
};
