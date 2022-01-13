import React from "react";
import { NativeBaseProvider, Pressable } from "native-base";
import AppText from "../AppText";
function PickerItem({ label, onPress }) {
  return (
    <NativeBaseProvider>
      <Pressable onPress={onPress}>
        <AppText style={{ padding: 25 }}>{label}</AppText>
      </Pressable>
    </NativeBaseProvider>
  );
}

export default PickerItem;
