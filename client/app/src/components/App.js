import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import Router from './Router';

export default class App extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
