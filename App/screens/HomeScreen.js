import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenC from "../components/ScreenC";


// Import Components
import TitleC from "../components/TitleC";
import ButtonC from "../components/ButtonC";
function HomeScreen(props) {
  return (
    <ScreenC>
      <View style={styles.headerGraphic}>
        <View style={styles.leftCircle} />
      </View>
      <View style={styles.welcomeContainer}>
        <TitleC title="Bienvenido a SquareCo" style={styles.separacion}></TitleC>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.botones}>
          
          <ButtonC title="Crear cuenta" color="naranja"></ButtonC>
          <View style={styles.separacion2}/>
          <ButtonC title="Crear cuenta" color="azul"></ButtonC>
        </View>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  headerGraphic: {
    position: "absolute",
    width: "100%",
    top: -50,
    zIndex: -100,
  },
  leftCircle: {
    backgroundColor: "#AD9CED",
    position: "absolute",
    borderRadius: 200,
    width: 400,
    height: 400,
    top: -100,
    left: -160,
    opacity: 48,
  },
  welcomeContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 30,
  },
  separacion: {
    marginBottom: 40,
  },
  separacion2: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 1,
      width: "100%",
  },
  botones: {
    padding: 50,
    paddingHorizontal: 80,
  }
});
export default HomeScreen;
{/* <View style={styles.buttonsContainer}>

<ButtonC title={"Crear cuenta"} color="naranja"></ButtonC>
<ButtonC title={"Iniciar Sesión"} color="azul"></ButtonC>

</View> */}