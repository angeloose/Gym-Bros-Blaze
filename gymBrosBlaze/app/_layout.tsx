import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#bdbdbd",
        tabBarStyle: {
          backgroundColor: "#424242", // beveled background similar to score icons
          borderTopWidth: 0,           // remove the line above the icons
          height: 50,                  // adjust the height as needed
          borderRadius: 15,            // for a rounded/beveled look
          marginHorizontal: 20,        // horizontal margin to center the bar within the screen
          position: "absolute",        // allows floating above the bottom edge
          bottom: 20,                  // position from the bottom
          left: 20,
          right: 20,
          elevation: 5,
          justifyContent: "center",
        },
        tabBarItemStyle: {
          marginHorizontal: 0, // reduce horizontal margin between items
          paddingHorizontal: 0,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={"#fff"} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="logSession"
        options={{
          title: "Log",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pencil-outline" color={"#fff"} size={size} />
          ),
        }}
      />
      
      <Tabs.Screen
      name="leaderboard"
      options={{
        title: "Leaderboard",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="flame" color={"#fff"} size={size} />
        ),
      }}
    />
  </Tabs>
  );
}
