import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../../config'; // or adjust if config.js is elsewhere


const SignUpScreen = ({ navigation }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const goToLogin = () => {
    router.push('/loginScreen'); // or .replace('/main')
  };
  // Simple validation function
  const validateForm = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill out all fields');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;
  
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert("Success", data.message);
        router.push('/loginScreen');
      } else {
        Alert.alert("Error", data.message || "Sign up failed");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert("Error", "Could not connect to server");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SIGN UP</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="SIGN UP" onPress={handleSignUp} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#292929",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default SignUpScreen;