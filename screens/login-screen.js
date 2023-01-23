import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform login logic here, such as sending a request to an authentication server
    if (!email || !password) {
      setError('Please enter your email and password');
    } else {
      // Successful login logic here
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderBottomWidth: 1, padding: 10 }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={{ borderBottomWidth: 1, padding: 10 }}
      />
      {error && <Text>{error}</Text>}
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
