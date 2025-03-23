import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LoginButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
      <Text style={styles.text}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    right: 80,
    up: 50,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
