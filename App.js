import React from "react";
import { StyleSheet, Text } from "react-native";

import RegisterScreen from "./App/screens/RegisterScreen";
export default function App() {
  return <RegisterScreen></RegisterScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
