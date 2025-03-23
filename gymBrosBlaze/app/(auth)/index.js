import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from 'expo-router';

export default function HomeScreen({ navigation }) {
  const router = useRouter();
  const goToLogin = () => {
    router.push('/loginScreen'); // or .replace('/main')
  };
  const goToSignUp = () => {
    router.push('/signUpScreen'); // or .replace('/main')
  };
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <Text style={styles.welcomeText}>WELCOME TO</Text>
        <Image 
          source={require("../../assets/images/blazeLogo.png")} 
          style={styles.logoImage} 
        />
      </View>

      {/* Buttons Section */}
      <View style={styles.containerB}>
        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen space
    backgroundColor: "#292929",
  },
  topContainer: {
    flex: 2, // Takes up more space for text and image
    justifyContent: "center", // Vertically center the items
    alignItems: "center", // Horizontally center the items
    paddingTop: 40, // Adds top padding to give space from the top
  },
  welcomeText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center", // Center text
  },

  logoImage: {
    width: 500,
    height: 500,
    marginTop: 2, // Adjust space between the text and image
  },
  containerB: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space out the buttons horizontally
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  button: {
    backgroundColor: '#3a7ff0',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});