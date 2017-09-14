import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

export const defaultState = {
  loading: null,
  loggedIn: null,
  error: null,
};

export default (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  console.log('reducerFunction', state, action);
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'LOGIN_REQUEST':
      newState.loading = true;
      console.log('LOGIN_REQUEST', newState);
      return newState;
    case 'LOGIN_RESPONSE':
      newState.loading = false;
      newState.loggedIn = true;
      console.log('LOGIN_RESPONSE', newState);
      return newState;
    case 'LOGIN_ERROR':
      newState.loading = false;
      newState.loggedIn = false;
      newState.error = action.payload;
      console.log('LOGIN_ERROR', newState);
      return newState;
    case 'SIGNUP_REQUEST':
      newState.loading = true;
      console.log('SIGNUP_REQUEST', newState);
      return newState;
    case 'SIGNUP_RESPONSE':
      newState.loading = false;
      newState.loggedIn = true;
      console.log('SIGNUP_RESPONSE', newState);
      return newState;
    case 'SIGNUP_ERROR':
      newState.loading = false;
      newState.loggedIn = false;
      newState.error = action.payload;
      console.log('SIGNUP_ERROR', newState);
      return newState;
  default:
    return state;
  }
};
