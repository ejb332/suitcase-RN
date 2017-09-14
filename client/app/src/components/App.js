import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { View, Text, StyleSheet } from 'react-native';
import Login from './auth/Login';
import Signup from './auth/Signup';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={Login} title="Log In" initial />
            <Scene key="signup" component={Signup} title="Sign Up" />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderWidth: 5,
    borderColor: 'blue',
    backgroundColor: '#F5FCFF',
    paddingTop: 40
  }
});
