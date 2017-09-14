import React from 'react';
import { TextInput, View, Text } from 'react-native';

// receive props from parent (LoginForm)
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        //turn off iOS autocorrect help
        autoCorrect={false}
        //boolean shortcut for true can be done by simply listing the property
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
    // flex is how we proportion space to each sibling - 2/3 allocated to inputStyle
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    // set container up so that flex items sit side-by-side
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
