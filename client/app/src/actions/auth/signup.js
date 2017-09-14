import React from 'react';
import { post } from '../../lib/request';

export function signupRequest() {
  console.log('action creator');
  return {
    type: 'SIGNUP_REQUEST'
  };
}

export function signupResponse() {
  console.log('action creator');
  return {
    type: 'SIGNUP_RESPONSE'
  };
}

export function signupError(payload) {
  console.log('action creator');
  return {
    type: 'SIGNUP_ERROR',
    payload
  };
}

export default function signup(email, password, passwordConfirmation) {
  console.log('signup action');
  let payload = {
    user: {
      email,
      password
    }
  };
  return (dispatch) => {
    console.log('dispatch');
    dispatch(loginRequest());
    return post(`http://localhost:3000/login?email=${email}&password=${password}`, {}, {})
    .then(response => {
      console.log('login response', response);
      dispatch(loginResponse());
    })
    .catch(err => {
      console.log('error', err);
      dispatch(loginError(err.data));
    });
  };
}
