import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const userName = "JOHN JOHNATHAN";

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/demo_pfp.jpg")}
            style={styles.profilePic}
          />
          <View style={styles.subprofileContainer}>
            <Text style={styles.subGreeting}>WELCOME BACK,</Text>
            <Text style={styles.greeting}>{userName}</Text>
          </View>
        </View>
      </View>

      {/* Score Row */}
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Image
            source={require("../assets/images/Consis_Icon.png")}
            style = {styles.scoreIcons}
          />
          <Text style={styles.scoreValue}>90</Text>
          <Text style={styles.scoreTitle}>CONSISTENCY</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreValue}>85</Text>
          <Text style={styles.scoreTitle}>PR</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreValue}>88</Text>
          <Text style={styles.scoreTitle}>OVERALL</Text>
        </View>
      </View>

      {/* Center Section */}
      <View style={styles.centerContainer}>
        <Text style={styles.welcomeText}>Welcome to the Gym App</Text>
        <Button title="Log a Session" onPress={() => router.push("/logSession")} />
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
});
