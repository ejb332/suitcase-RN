import React from 'react';
import { post } from '../../lib/request';

export function loginRequest() {
  console.log('action creator');
  return {
    type: 'LOGIN_REQUEST'
  };
}

export function loginResponse() {
  console.log('action creator');
  return {
    type: 'LOGIN_RESPONSE'
  };
}

export function loginError(payload) {
  console.log('action creator');
  return {
    type: 'LOGIN_ERROR',
    payload
  };
}

export default function login(email, password) {
  console.log('login action');
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
