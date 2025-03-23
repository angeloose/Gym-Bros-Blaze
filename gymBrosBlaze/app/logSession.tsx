import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

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
    <View style={{ padding: 20 }}>
      <Text>Log Your Session</Text>
      <TextInput
        placeholder="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Text>Exercise</Text>
      <Picker
        selectedValue={exercise}
        onValueChange={(itemValue) => setExercise(itemValue)}
        style={{borderWidth: 1, marginVertical: 10,padding: 1}}
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
      <Button title="Log Session" onPress={handleLogSession} />
    </View>
  );
}
