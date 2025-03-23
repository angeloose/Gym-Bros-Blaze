import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SignUpButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sign Up")}>
      <Text style={styles.text}>SIGN UP</Text>
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
