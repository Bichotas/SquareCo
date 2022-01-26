import { Box, NativeBaseProvider, Image } from "native-base";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ImagePicker({ imageUri }) {
  return (
    <NativeBaseProvider>
      <Box
        alignItems={"center"}
        bg={colors.light}
        borderRadius={15}
        height={100}
        justifyContent={"center"}
        width={100}
      >
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && (
          <Image source={{ uri: imageUri }} height={"100%"} width={"100%"} />
        )}
      </Box>
    </NativeBaseProvider>
  );
}

export default ImagePicker;
