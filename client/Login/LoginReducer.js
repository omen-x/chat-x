
const initState = {
  errorMessage: '',
  loading: false
};

const login = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_LOADER': {
      return {
        ...state,
        loading: true
      };
    }

    case 'HIDE_LOADER': {
      return {
        ...state,
        loading: false
      };
    }

    case 'SET_FORM_ERROR': {
      return {
        ...state,
        errorMessage: action.error
      };
    }

    case 'HIDE_FORM_ERROR': {
      return {
        ...state,
        errorMessage: ''
      };
    }

    default:
      return state;
  }
};

export default login;
