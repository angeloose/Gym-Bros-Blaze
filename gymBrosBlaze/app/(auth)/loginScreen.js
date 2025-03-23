import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

export default function LoginScreen({ navigation }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // IMPLEMENT BACKEND AND LOGIN PROPERLY
  const handleLogin = () => {
    try {
      //const response = await fetch("https://your-api.com/login", {
      //  method: "POST",
      //  headers: { "Content-Type": "application/json" },
      //  body: JSON.stringify({ email, password }),
      //});
      
      //if (!response.ok) {
      //  throw new Error(`HTTP error! status: ${response.status}`);
      //}

      //const data = await response.json();
      //console.log("Login response:", data);

      // Handle success (e.g., navigate, store token)
      router.push('/main'); // Goes to main.tsx (tabs layout)

    } catch (error) {
      console.error("Login error:", error);
    }
    
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "292929",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
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
