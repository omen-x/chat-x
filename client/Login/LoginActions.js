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


const loginUser = (userData) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: userData
  };

  return dispatch =>
    fetch('/auth/login', requestOptions)
      .then((res) => {
        if (res.status !== 200) {
          return res.json().then((data) => {
            dispatch(setFormError(data.error));
          });
        }
        return res.json().then((data) => {
          dispatch(authenticateUser(data.token, data.user));
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
  loginUser
};
