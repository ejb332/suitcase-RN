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
import signup from '../../actions/auth/signup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  render() {
    console.log(signup);
    const { email, password, passwordConfirmation } = this.state;
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          value={email}
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          placeholder="Password"
          value={password}
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(passwordConfirmation) => this.setState({ passwordConfirmation })}
          placeholder="Password Confirm"
          value={passwordConfirmation}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.push('login')}>
          <Text>Already a User? Log In</Text>
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
    signup: bindActionCreators(signup, dispatch),
    dispatch
  })
)(Signup);
