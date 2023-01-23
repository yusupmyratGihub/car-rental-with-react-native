import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Perform registration logic here, such as sending a request to a server
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill out all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Successful registration logic here
    }
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderBottomWidth: 1, padding: 10 }}
      />
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
      <Text>Confirm Password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry={true}
        style={{ borderBottomWidth: 1, padding: 10 }}
      />
      {error && <Text>{error}</Text>}
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
