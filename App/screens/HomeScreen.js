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
      <ScreenC>
        <CIrclesD></CIrclesD>
      </ScreenC>

  );
}
const styles = StyleSheet.create({
});
export default HomeScreen;
{/* <View style={styles.buttonsContainer}>

<ButtonC title={"Crear cuenta"} color="naranja"></ButtonC>
<ButtonC title={"Iniciar Sesión"} color="azul"></ButtonC>

</View> */}