import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.welcomeText}>WELCOME TO</Text>
        <Text style={styles.welcomeText2}>GYM BROS BLAZE</Text>
      </View>
        

      <View style={styles.containerB}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sign Up")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
  },
  topContainer: {
    marginTop: 20,
    marginLeft: 15,
    alignItems: "flex-start",
  },
  subprofileContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  subGreeting: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#bdbdbd",
  },
  welcomeText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  welcomeText2: {
    fontSize: 35,
    color: "#fff",
    bottom: 25
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  containerB: {
    flex: 1,
    flexDirection: 'row',           // Arrange buttons side by side
    justifyContent: 'space-between', // Space buttons out
    padding: 20,
    alignItems: 'center',           // Vertically center the buttons
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 5,
    width: '45%',                   // Makes the button a bit smaller than half of the container
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  
});
