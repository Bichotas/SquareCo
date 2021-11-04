import React from "react";
import { StyleSheet, Text } from "react-native";

import RecoverPasswordScreen from "./App/screens/RecoverPasswordScreen";
export default function App() {
  return <RecoverPasswordScreen></RecoverPasswordScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
