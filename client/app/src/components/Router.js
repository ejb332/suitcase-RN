import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const RouterComponent = () => {
  return (
  <Router sceneStyle={{ paddingTop: 60 }}>
    <Scene key="auth">
      <Scene key="login" component={Login} title="Log In" initial />
      <Scene key="signup" component={Signup} title="Sign Up" />
    </Scene>
  </Router>
  );
};

export default RouterComponent;
