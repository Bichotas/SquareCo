import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/stylesGlobal";

import colors from "../config/colors";
function InputFormC({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    padding: 15,
    marginVertical: 15,
  },
  icon: {
    marginRight: 10,
  },
});
export default InputFormC;
