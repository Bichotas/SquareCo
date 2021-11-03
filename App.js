import React from "react";
import { StyleSheet, Text } from "react-native";
import LoadingScreen from "./App/screens/LoadingScreen";
export default function App() {
  return <LoadingScreen></LoadingScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
