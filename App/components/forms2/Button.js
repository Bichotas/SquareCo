import React from "react";
import { NativeBaseProvider, Button } from "native-base";
import colors from "../../config/colors";
function Button({ title, onPress, color = "primary" }) {
  return (
    <NativeBaseProvider>
      <Button
        size={"sm"}
        onPress={onPress}
        bg={colors[color]}
        padding={5}
        width={"100%"}
        textAlign={"center"}
      >
        {title}
      </Button>
    </NativeBaseProvider>
  );
}

export default Button;
