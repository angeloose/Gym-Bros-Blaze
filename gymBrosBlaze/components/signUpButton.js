import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SignUpButton({ navigation }) {
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
    left: 80,
    up: 50,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
