import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from '../actions/types';

export const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  loggedIn: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_RESPONSE:
      return { ...state, loading: false, loggedIn: true };
    case LOGIN_ERROR:
      return { INITIAL_STATE };
    case SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_RESPONSE:
      return { ...state, loading: false, loggedIn: true };
    case SIGNUP_ERROR:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
