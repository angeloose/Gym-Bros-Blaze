import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen.js";
import LoginScreen from "../screens/loginScreen.js";
import SignUpScreen from "../screens/signUpScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
  );
}
