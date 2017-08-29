import { actions as userActions } from 'client/User'; // eslint-disable-line


const { authenticateUser } = userActions;


// ========>> SIGN UP <<========

const showLoader = () => ({
  type: 'SHOW_LOADER'
});


const hideLoader = () => ({
  type: 'HIDE_LOADER'
});


const setFormError = error => ({
  type: 'SET_FORM_ERROR',
  error
});

const hideFormError = () => ({
  type: 'HIDE_FORM_ERROR'
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
          return res.json().then((data) => {
            dispatch(setFormError(data.error));
          });
        }
        return res.json().then((data) => {
          dispatch(authenticateUser(data.token));
        });
      })
      .then(() => {
        dispatch(hideLoader());
      })
      .catch((err) => {
        console.log(`SignUp request failed: ${err}`);
      });
};


// ========>> EXPORT <<========

export default {
  showLoader,
  hideLoader,
  setFormError,
  hideFormError,
  signupUser
};
