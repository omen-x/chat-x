
const initState = {
  errorMessage: ''
};

const signUp = (state = initState, action) => {
  switch (action.type) {
    case 'SET_FORM_ERROR_MESSAGE': {
      return Object.assign({}, state, errorMessage: action.error)
    }

    default:
      return state;
  }
};

export default signUp;
