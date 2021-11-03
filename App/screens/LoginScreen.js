import React from "react";
import { StyleSheet } from "react-native";
// Designs
import LoginCirclesD from "../designs/LoginCIrclesD";
// Components
import ScreenC from "../components/ScreenC";
import ButtonC from "../components/ButtonC";
function LoginScreen(props) {
  return <ScreenC style={styles.loginScreen}>
    <LoginCirclesD></LoginCirclesD>
  </ScreenC>;
}
const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#71D7F1",
    alignItems: 'center'
  }
});
export default LoginScreen;
