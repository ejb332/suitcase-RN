import axios from 'axios';

function _request(method = 'GET', url, params = {}, headers = {}) {
  let defaultHeaders = Object.assign({}, headers);
  let axiosParams = Object.assign({}, params);
  let options = {
    method,
    url,
    timeout: 30000
  };
  if (method.toUpperCase() === 'GET') {
    options.params = axiosParams;
  } else {
    options.data = axiosParams;
  }

  return axios(options);
}

export function get(path, params, headers) {
  return _request('GET', path, params, headers);
}

export function patch(path, params, headers) {
  return _request('PATCH', path, params, headers);
}

export function post(path, params, headers) {
  return _request('POST', path, params, headers);
}

export function remove(path, params, headers) {
  return _request('DELETE', path, params, headers);
}
