import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

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
      const response = await fetch("http://192.168.56.1:5000/api/signup", {
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
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 20,
    backgroundColor: "#292929",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    backgroundColor: "#3d3d3d",
    borderRadius: 10,
    borderWidth: 0,
    padding: 12,
    fontSize: 16,
    color: "#fff",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // Android elevation
    elevation: 5,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUpScreen;