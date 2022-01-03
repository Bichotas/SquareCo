import React from "react";
import { NativeBaseProvider, Input, HStack, Center } from "native-base";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
function TextInputForm({ icon, ...otherProps }) {
  return (
    <NativeBaseProvider>
      <Center
        width={"100%"}
        alignItems={"center"}
        paddingX={5}
        flexDirection="row"
        bg={"gray.200"}
        borderRadius={15}
      >
        {icon && (
          <MaterialCommunityIcons name={icon} size={20} color={"gray.200"} />
        )}
        <Input
          width={"100%"}
          padding={2}
          borderColor={"transparent"}
          _focus={{
            borderColor: "transparent",
          }}
        />
      </Center>
    </NativeBaseProvider>
  );
}

export default TextInputForm;
