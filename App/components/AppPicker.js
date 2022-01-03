import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextC from "./AppTextC";
import defaultStyles from "../config/stylesGlobal";
import PickerItem from "./PickerItem";
import colors from "../config/colors";
import { Button, FlatList } from "native-base";

const items = [
  { value: 1, label: "COSAS" },
  { value: 2, label: "DFASD" },
  { value: 3, label: "ASDG" },
  { value: 4, label: "AGDFH" },
];
function AppPicker({ icon, placeholder, ...others }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppTextC style={{ flex: 1 }}>{placeholder}</AppTextC>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button onPress={() => setModalVisible(false)}>Close</Button>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => <PickerItem label={item.label} />}
        />
      </Modal>
    </>
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
export default AppPicker;
