import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import stylesGlobal from "../config/stylesGlobal";

// Dios
function AppText({ children, style }) {
  return <Text style={[stylesGlobal.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({});
export default AppText;
