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
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
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
    backgroundColor: "#292929",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  inputig: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
});
