import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import WorkoutWeek from "../../Components/WorkoutWeek"
import FastImage from 'react-native-fast-image';

export default function main() {
  const router = useRouter();
  const userName = "JOHN DOE";

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/demo_pfp.jpg")}
            style={styles.profilePic}
          />
          
          <View style={styles.subprofileContainer}>
            <Text style={styles.subGreeting}>WELCOME BACK,</Text>
            <Text style={styles.greeting}>{userName}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.scoreHeadingContainer}>
        <Text style={styles.scoreHeading}>SCORE</Text>
      </View>

      {/* Score Row */}
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Image
            source={require("../../assets/images/Consis_Icon.png")}
            style={{ width: 40, height: 40, marginLeft: 1 }}
          />
          <Text style={styles.scoreValue}>90</Text>
          <Text style={styles.scoreTitle}>CONSISTENCY</Text>
        </View>
        <View style={styles.scoreBox}>
          <Image
            source={require("../../assets/images/pr_icon.png")}
            style={{ width: 40, height: 40, marginRight: 1 }}
          />
          <Text style={styles.scoreValue}>10</Text>
          <Text style={styles.scoreTitle}>PR</Text>
        </View>
        <View style={styles.scoreBox}>
          <Image
            source={require("../../assets/images/overall_icon.png")}
            style={{ width: 40, height: 40, marginLeft: 2 }}
          />
          <Text style={styles.scoreValue}>100</Text>
          <Text style={styles.scoreTitle}>OVERALL</Text>
        </View>
      </View>

      <View style={styles.scoreHeadingContainer}>
        <Text style={styles.scoreHeading}>PAST WEEK</Text>
      </View>

      {/* Week View Section */}
      <WorkoutWeek />
      <View style={styles.imagecontainer}>
        <Image 
          source={require("../../assets/images/blue_flame.gif")} 
          style={styles.gif} 
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.imagetext}> 4 </Text>
        <Image
        source={require("../../assets/images/blazeText.png")}
        style={styles.blaze}
        />
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
    marginBottom: 10,
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  scoreHeadingContainer: {
    alignItems: "flex-start",
    marginTop: 30,
    marginLeft: 20,
  },
  scoreHeading:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
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
  imagecontainer: {
    position: 'relative', // This makes the text overlay possible
    width: 400,           // Set a width for the image
    height: 400, 
    flex: 1,
    bottom: '4%',
  },
  gif: {
    width: 300,  
    height: 330,
    alignItems: "center",
    marginLeft: 12, 
  },
  imagetext: {
    position: 'absolute',  // This positions the text on top of the image
    alignItems: "center",
    bottom: '22%',
    left: '42%',
    color: 'black',        // Text color
    fontSize: 60,          // Font size
    fontStyle: 'italic'
  },
  blaze: {
    width: 250,  
    height: 100, 
    position: 'absolute',  // This positions the text on top of the image
    alignItems: "center",
    marginTop: 200,
    marginLeft: 80,
  }
});
