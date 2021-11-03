import React from "react";
import { StyleSheet, Text } from "react-native";
import ButtonC from "./App/components/ButtonC";
import ScreenC from "./App/components/ScreenC";
export default function App() {
  return (
    <ScreenC>
      <ButtonC title="Amm"></ButtonC>
    </ScreenC>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
