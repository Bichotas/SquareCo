import React from "react";
import { View, StyleSheet } from "react-native";

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
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  optionScreen: {
    backgroundColor: colors.primary,
    overflow: "hidden",
  },
});
export default AccountOptionScreen;
