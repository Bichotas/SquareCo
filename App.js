import React from "react";
import { StyleSheet, Text } from "react-native";
import TitleC from "./App/components/TitleC";

import LoginScreen from "./App/screens/LoginScreen";

export default function App() {
  return <LoginScreen></LoginScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
