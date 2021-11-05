import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
// Designs
import RegisterCirclesD from "../designs/RegisterCirclesD";
// Components
import ScreenC from "../components/ScreenC";
import ButtonC from "../components/ButtonC";
import InputFormC from "../components/InputFormC";

// Colores
import colors from "../config/colors";

function RegisterScreen(props) {
  return (
    <ScreenC style={styles.loginScreen}>
      <RegisterCirclesD></RegisterCirclesD>
      <KeyboardAvoidingView style={styles.container} enabled={true}>
        <View style={styles.textContainer}>
          <Text style={styles.texto}>Crea tu cuenta</Text>
          <View style={styles.ada} />
        </View>
        <View style={styles.formContainer}>
          <InputFormC
            placeholder="Nombre"
            icon="account-circle-outline"
            autoCapitalize="none"
            autoCorrect={false}
          />
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
            placeholder="Contraseña"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonC title="Registrarse" color="white" text="dark" />
        </View>
      </KeyboardAvoidingView>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#FA8C47",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    width: "100%",
    padding: 10,
  },
  texto: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 45,
    textTransform: "uppercase",
    // borderColor: colors.white,
    // borderBottomWidth: 5,
    textAlign: "center",
  },
  ada: {
    paddingHorizontal: 30,
    height: 4,
    backgroundColor: colors.white,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  link: {
    color: "#4626E8",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
export default RegisterScreen;
