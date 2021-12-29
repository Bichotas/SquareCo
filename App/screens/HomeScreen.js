import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenC from "../components/ScreenC";

// DIseños
import CIrclesD from "../designs/CIrclesD";
// Import Components
import TitleC from "../components/TitleC";
import ButtonC from "../components/ButtonC";
function HomeScreen(props) {
  return (
    <ScreenC style={styles.a}>
      <CIrclesD></CIrclesD>
      <View style={styles.titleContainer}>
        <TitleC title="Bienvenido a SquareCo" />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonC title="Crear cuenta" color="naranja"></ButtonC>
        <View style={styles.separacion} />
        <ButtonC title="Iniciar sesión" color="azul"></ButtonC>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  a: {
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    flex: 1,
    marginTop: -120,
    justifyContent: "center",
    width: "70%",
    paddingHorizontal: 30,
  },
  separacion: {
    padding: 10,
  },
});
export default HomeScreen;
{
  /* <View style={styles.buttonsContainer}>

<ButtonC title={"Crear cuenta"} color="naranja"></ButtonC>
<ButtonC title={"Iniciar Sesión"} color="azul"></ButtonC>

</View> */
}
