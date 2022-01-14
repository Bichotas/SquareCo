import React from "react";
import {
  Box,
  Center,
  NativeBaseProvider,
  View,
  Button,
  Image,
} from "native-base";

// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function ImageProfile({ imageUri, onPress }) {
  return (
    <NativeBaseProvider config={config}>
      <Center>
        <View size={[120, 150]} overflow={"hidden"}>
          {/* Si es que no existe una image vamos a renderizar un cuadro con un degradado */}
          {!imageUri && (
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={20}
              bg={{
                linearGradient: {
                  colors: ["violet.100", "violet.800"],
                  start: [0, 0],
                  end: [0, 1],
                },
              }}
            ></Box>
          )}
          {/* Pero si existe, entonces vamos a mostrar una imagen */}
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              width={"100%"}
              height={"100%"}
              borderRadius={20}
            />
          )}
        </View>
        <Button
          borderRadius={50}
          px={7}
          margin={5}
          fontWeight={"bold"}
          onPress={onPress}
        >
          Cambiar foto
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default ImageProfile;
