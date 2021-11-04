import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// Designs
import LoginCirclesD from "../designs/LoginCIrclesD";
// Components
import ScreenC from "../components/ScreenC";
import ButtonC from "../components/ButtonC";
import InputFormC from "../components/InputFormC";
import colors from "../config/colors";
function LoginScreen(props) {
  return (
    <ScreenC style={styles.loginScreen}>
      <LoginCirclesD></LoginCirclesD>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.texto}>Acceso</Text>
        </View>
        <View style={styles.formContainer}>
          <InputFormC
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <InputFormC
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonC title="ACCEDER" color="naranja" />
          <TouchableOpacity>
            <Text style={styles.link}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#71D7F1",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },
  texto: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 45,
    textTransform: "uppercase",
    // borderColor: colors.white,
    // borderBottomWidth: 5,
    textDecorationLine: "underline",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    padding: 20,
    alignItems: "center",
  },
  link: {
    color: "#4626E8",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
export default LoginScreen;
