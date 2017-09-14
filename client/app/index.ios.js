import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import configureStore from './src/store/configure-store';
import { Provider } from 'react-redux';
import AppContainer from './src/components/App';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flexGrow: 1, borderWidth: 2 }}>
          <AppContainer></AppContainer>
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};

AppRegistry.registerComponent('app', () => App);
