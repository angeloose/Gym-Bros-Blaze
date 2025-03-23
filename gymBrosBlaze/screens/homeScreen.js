import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginButton from "../components/loginButton";
import SignUpButton from "../components/signUpButton";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.welcomeText}>WELCOME TO</Text>
        <Text style={styles.welcomeText2}>GYM BROS BLAZE</Text>
        <LoginButton navigation={navigation} />
        <SignUpButton navigation={navigation} />
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
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subprofileContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  subGreeting: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#bdbdbd",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  scoreIcons: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 20,
  },
  scoreBox: {
    backgroundColor: "#424242",
    borderRadius: 10,
    padding: 10,
    width: "30%",
    alignItems: "center",
  },
  scoreTitle: {
    fontSize: 14,
    color: "#bdbdbd",
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});
