import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinner, Button } from '../common';
import login from '../../actions/auth/login';

class Login extends Component {
  // these props are coming from login
  constructor(props) {
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log('onPress');
    this.props.login();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    console.log('login render state', this.state);
    return (
      <View style={styles.loginStyle}>
        <Image
        style={styles.imageStyle}
        source={require('../../../images/Suitecase_Green_Vert.png')}
        />
        <TextInput
          style={styles.textStyle}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          value={this.props.email}
        />
        <TextInput
          style={styles.textStyle}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          placeholder="Password"
          value={this.props.password}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.onPress}
        >
          <Text style={styles.textStyle}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  loginStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35A8D9',
  },
  textStyle: {
    color: '#30353B',
    fontSize: 20,
    textAlign: 'center',
    width: 200
  },
  imageStyle: {
    marginBottom: 25
  },
  buttonStyle: {
    width: 250,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#F3F3F4',
  }
};

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
