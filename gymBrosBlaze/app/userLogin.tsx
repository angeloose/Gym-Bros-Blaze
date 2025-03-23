import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LogSessionScreen() {
  const [duration, setDuration] = useState("");
  const [exercise, setExercise] = useState("");

  const handleLogSession = () => {
    // For now, simply log the data or update local state.
    console.log("Session logged:", { duration, exercise });
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
      <TextInput
        placeholder="Exercise Type"
        value={exercise}
        onChangeText={setExercise}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Log Session" onPress={handleLogSession} />
    </View>
  );
}
