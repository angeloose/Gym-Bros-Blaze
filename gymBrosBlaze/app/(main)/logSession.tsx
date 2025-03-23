import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

interface Exercise {
  id: string;
  type: string;
  duration: string;
}

interface Session {
  id: string;
  name: string;
  exercises: Exercise[];
  timestamp: string;
}

export default function LogSession() {
  const [sessionName, setSessionName] = useState("");
  const [duration, setDuration] = useState("");
  const [exercise, setExercise] = useState("Bench Press");
  const [currentExercises, setCurrentExercises] = useState<Exercise[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);

  const addExercise = () => {
    if (!duration.trim()) return;
    const newExercise = { id: Date.now().toString(), type: exercise, duration };
    setCurrentExercises([...currentExercises, newExercise]);
    setDuration("");
  };

  const removeExercise = (id: string) => {
    setCurrentExercises(currentExercises.filter((exercise) => exercise.id !== id));
  };

  const logSession = () => {
    if (!sessionName.trim() || currentExercises.length === 0) return;
    const newSession = {
      id: Date.now().toString(),
      name: sessionName,
      exercises: currentExercises,
      timestamp: new Date().toLocaleString(),
    };
    const updatedSessions = [newSession, ...sessions.slice(0, 9)]; // Keep only the last 10 sessions
    setSessions(updatedSessions);
    setCurrentExercises([]);
    setSessionName("");
  };

  const removeSession = (id: string) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.topContainer}>
          <View style={styles.headingContainer}>
            <Ionicons name="clipboard-outline" size={20} color="#fff" />
            <Text style={styles.loggingPageHeading}>LOG YOUR SESSION</Text>
          </View>
          <View style={styles.line} />
        </View>

        {/* Session Name */}
        <Text style={styles.scoreHeading}>SESSION NAME:</Text>
        <TextInput
          placeholder="Enter session name"
          value={sessionName}
          onChangeText={setSessionName}
          style={styles.input}
          placeholderTextColor="#fff"
        />

        {/* Exercise Input */}
        <Text style={styles.scoreHeading}>TIME (MINS):</Text>
        <TextInput
          placeholder="Enter duration"
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
        </Picker>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={addExercise}>
          <Text style={styles.buttonText}>ADD EXERCISE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={logSession}>
          <Text style={styles.buttonText}>LOG SESSION</Text>
        </TouchableOpacity>

        {/* Current Exercises in Session */}
        {currentExercises.length > 0 && (
          <View style={styles.currentSessionContainer}>
            <Text style={styles.subHeading}>Current Exercises:</Text>
            <FlatList
              data={currentExercises}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>{item.type} - {item.duration} mins</Text>
                  <TouchableOpacity onPress={() => removeExercise(item.id)}>
                    <Ionicons name="trash-outline" size={18} color="red" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}

        {/* Logged Sessions - Last 10 Only */}
        <View style={styles.sessionListContainer}>
          <Text style={styles.subHeading}>Last 10 Sessions:</Text>
          <FlatList
            data={sessions}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 80 }} // Extra space for bottom tab
            renderItem={({ item }) => (
              <View style={styles.sessionContainer}>
                <View style={styles.sessionHeader}>
                <Text style={styles.sessionTitle}>{item.name} - {item.timestamp}</Text>
                <TouchableOpacity onPress={() => removeSession(item.id)}>
                  <Ionicons name="trash-outline" size={20} color="red" />
                </TouchableOpacity>
              </View>
              {item.exercises.map((exercise) => (
                <Text key={exercise.id} style={styles.listItem}>
                  {exercise.type} - {exercise.duration} mins
                </Text>
              ))}
            </View>
          )}
        />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#292929", padding: 20 },
  topContainer: { alignItems: "center" },
  headingContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 15 },
  loggingPageHeading: { marginLeft: 5, fontSize: 20, fontWeight: "bold", color: "#fff" },
  line: { height: 1, width: "100%", backgroundColor: "#fff", marginVertical: 10 },
  scoreHeading: { fontSize: 18, fontWeight: "bold", color: "#fff", marginTop: 20 },
  input: {
    backgroundColor: "#3d3d3d", borderRadius: 10, padding: 12, fontSize: 16, color: "#fff",
    marginVertical: 10,
  },
  picker: { color: "#fff", marginBottom: 10 },
  button: {
    backgroundColor: "#3a7ff0", borderRadius: 10, paddingVertical: 12, alignItems: "center",
    marginTop: 10,
  },
  buttonText: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  currentSessionContainer: { marginTop: 20, padding: 10, backgroundColor: "#424242", borderRadius: 10 },
  subHeading: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 5 },
  listItemContainer: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    backgroundColor: "#505050", padding: 8, borderRadius: 5, marginBottom: 5,
  },
  listItem: { fontSize: 14, color: "#fff" },
  sessionListContainer: { marginTop: 20 },
  sessionContainer: { marginTop: 20, padding: 10, backgroundColor: "#505050", borderRadius: 10 },
  sessionHeader: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    marginBottom: 5,
  },
  sessionTitle: { fontSize: 16, fontWeight: "bold", color: "#fff" },
});
