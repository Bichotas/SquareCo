import React from "react";
import { NativeBaseProvider, Input } from "native-base";
function TextInput({ value, placeholder, ...otherProps }) {
  // Poner un icono si es que se necesita
  return (
    <NativeBaseProvider>
      <Input
        defaultValue={value}
        width={"100%"}
        borderWidth={3}
        variant={"filled"}
        placeholder={placeholder}
        borderRadius={15}
        padding={4}
        fontSize={16}
        {...otherProps}
      />
    </NativeBaseProvider>
  );
}

export default TextInput;
