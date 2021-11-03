import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenC from "../components/ScreenC";

function HomeScreen(props) {
  return (
    <ScreenC>
      <View style={styles.headerGraphic}>
        <View style={styles.rightCircle} />
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
  rightCircle: {
    backgroundColor: "#7022d9",
    position: "absolute",
    borderRadius: 200,
    width: 400,
    height: 400,
    top: -100,
    left: -150,
  },
});
export default HomeScreen;
