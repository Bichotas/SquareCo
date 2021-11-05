import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ButtonC from "../components/ButtonC";

// Componentes
import ScreenC from "../components/ScreenC";

// Configuraciones
import colors from "../config/colors";

// Diseños
import AccountOptionsCircle from "../designs/AccountOptionsCirclesD";
function AccountOptionScreen(props) {
  return (
    <ScreenC style={styles.optionScreen}>
      <AccountOptionsCircle></AccountOptionsCircle>
      {/* Contenedor  */}
      <View style={styles.container}>
        {/* Imagen */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/enredate.png")}
            resizeMode="center"
          ></Image>
        </View>

        {/* Texto */}
        <Text style={styles.text}>¿Qué te gustaría hacer?</Text>

        {/* Botones */}
        <View style={styles.buttonsContainer}>
          <View style={styles.button1}>
            <ButtonC title="Comprar" color="naranja" />
          </View>
          <View style={styles.button2}>
            <ButtonC title="Vender" color="white" text="dark" />
          </View>
        </View>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  optionScreen: {
    backgroundColor: colors.primary,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "30%",
    padding: 20,
    borderRadius: 30,
    backgroundColor: colors.azul,
    marginBottom: 15,
  },
  image: {
    width: 300,
  },
  text: {
    padding: 10,
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flex: 0.75,
    width: "100%",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button1: {
    width: "60%",
  },
  button2: {
    marginLeft: "40%",
    width: "60%",
  },
});
export default AccountOptionScreen;
