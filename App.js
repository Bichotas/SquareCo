import React from "react";
import { StyleSheet, Text } from "react-native";
import AccountOptionScreen from "./App/screens/AccountOptionScreen";
export default function App() {
  return <AccountOptionScreen></AccountOptionScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
