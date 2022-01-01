import React from "react";
import {
  NativeBaseProvider,
  Box,
  KeyboardAvoidingView,
  VStack,
  ScrollView,
  Center,
  Select,
  Button,
} from "native-base";
import InputStoreC from "../components/forms/InputStoreC";
import HeaderScreenC from "../components/HeaderScreenC";
function CreatingStoreScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <HeaderScreenC title={"Creacion de la tienda"} />
        <KeyboardAvoidingView>
          <Box flex={1} padding={6} marginTop={10}>
            <VStack space={2} mt="3">
              <InputStoreC
                title={"Nombre de tu tienda"}
                placeholder={"Escribe aqui"}
              />
              <InputStoreC title={"Descripción"} placeholder={"Escribe algo"} />

              {/* Aqui poner el picker */}
            </VStack>

            <Center marginTop={4}>
              <Button
                paddingY={4}
                paddingX={10}
                borderRadius={50}
                marginBottom={4}
                fontWeight={"bold"}
              >
                Guardar Cambios
              </Button>
            </Center>
          </Box>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CreatingStoreScreen;