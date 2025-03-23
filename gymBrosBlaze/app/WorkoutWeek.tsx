// WorkoutWeek.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dummy data for the last 7 days
const weekData = [
  { day: "Mon", worked: true },
  { day: "Tue", worked: false },
  { day: "Wed", worked: true },
  { day: "Thu", worked: true },
  { day: "Fri", worked: false },
  { day: "Sat", worked: true },
  { day: "Sun", worked: false },
];

export default function WorkoutWeek() {
  return (
    <View style={styles.weekContainer}>
      {weekData.map((item, index) => (
        <View key={index} style={styles.dayContainer}>
          {item.worked ? (
            <Ionicons name="checkmark-circle" size={24} color="green" />
          ) : (
            <Ionicons name="close-circle" size={24} color="red" />
          )}
          <Text style={styles.dayText}>{item.day}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  weekContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    backgroundColor: "#424242",
    borderRadius: 10,
    padding: 20,
    width: "90%",
  },
  dayContainer: {
    alignItems: "center",
  },
  dayText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
});
