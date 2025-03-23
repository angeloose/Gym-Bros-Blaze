import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

export default function logSession() {
  const [duration, setDuration] = useState("");
  const [exercise, setExercise] = useState("");

  const handleLogSession = () => {
    // For now, simply log the data or update local state.
    const currentDateTime = new Date();
    console.log("Session logged:", {
      duration,
      exercise,
      timestamp: currentDateTime.toLocaleString(),  
    });

  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headingContainer}>
          <Ionicons name='clipboard-outline' size={20} color='#fff'/>
          <Text style = {styles.loggingpageHeading}>LOG YOUR SESSION</Text>
        </View>
        <View style={styles.line} />
      </View>
      <Text style = {styles.scoreHeading}>TIME (MINS):</Text>
      <TextInput
          placeholder=""
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#fff"
        />
        <Text style={styles.scoreHeading}>EXERCISE TYPE:</Text>
        <Picker
          selectedValue={exercise}
          onValueChange={(itemValue) => setExercise(itemValue)}
          style={styles.picker}
          dropdownIconColor={"#fff"}
        >
          <Picker.Item label="Bench Press" value="Bench Press" />
          <Picker.Item label="Squat" value="Squat" />
          <Picker.Item label="Deadlift" value="Deadlift" />
          <Picker.Item label="Overhead Press" value="Overhead Press" />
          <Picker.Item label="Pull-up" value="Pull-up" />
          <Picker.Item label="Row" value="Row" />
          <Picker.Item label="Leg Press" value="Leg Press" />
          <Picker.Item label="Biceps Curl" value="Biceps Curl" />
          <Picker.Item label="Triceps Extension" value="Triceps Extension" />
          {/* Add as many exercises as you need */}
        </Picker>
        <TouchableOpacity style={styles.button} onPress={handleLogSession}>
          <Text style={styles.buttonText}>Log Session</Text>
        </TouchableOpacity>
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
    marginLeft: 0,
    alignItems: "center",
  },
  headingContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
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
    marginTop: 20,
    marginLeft: 20,
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
  pastweekheadingContainer: {
    alignItems: "flex-start",
    marginTop: 30,
    marginLeft: 20,
  },
  pastweekHeading:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  loggingpageHeading:{
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
  line: {
    height: 1,
    width: "100%", // force it to fill the available width
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
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
  pickerContainer: {
    backgroundColor: "#3d3d3d",
    borderRadius: 10,
    marginVertical: 10,
    // Android elevation for shadow
    elevation: 5,
    // iOS shadow styling:
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  picker: {
    color: "#fff",
    // Adjust padding if needed (Note: some styling may be platform-limited)
    paddingHorizontal: 10,
    marginLeft: 4,
    fontSize: 15,
    marginRight: 230,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#3a7ff0",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});