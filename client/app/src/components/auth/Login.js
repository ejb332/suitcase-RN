import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators }  from 'redux';
import login from '../../actions/auth/login';
import { Spinner, Button } from '../common';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log('onPress');
    this.props.login();
  }

  // renderButton() {
  //   if (this.props.loading) {
  //     return <Spinner size="large" />;
  //   }

  //   return (
  //     <Button onPress={this.onPress.bind(this)}>
  //       Log In
  //     </Button>
  //   );
  // }

  render() {
    console.log('login render state', this.state);
    return (
      <View 
        style={{
          display: 'flex', 
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ email: text })}
          placeholder="Email"
          value={this.state.email}
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
          placeholder="Password"
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.push('signup')}>
          <Text>Not A User? Sign Up!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => {
    console.log('login state', state);
    return {
      auth: state.auth
    };
  },
  dispatch => ({
    login: bindActionCreators(login, dispatch),
    dispatch
  })
)(Login);
