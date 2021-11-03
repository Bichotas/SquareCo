import React from "react";
import { StyleSheet, Text } from "react-native";
import TitleC from "./App/components/TitleC";

import HomeScreen from "./App/screens/HomeScreen";

export default function App() {
  return <HomeScreen></HomeScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
