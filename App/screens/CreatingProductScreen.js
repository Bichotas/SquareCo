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
  Container,
} from "native-base";
import InputStoreC from "../components/forms/InputStoreC";
import HeaderScreenC from "../components/HeaderScreenC";
function CreatingProductScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* Si es necesario, quitar el encabezado */}
        <HeaderScreenC title={"Publicacion del producto"} />
        <KeyboardAvoidingView>
          <Box flex={1} padding={6} marginTop={10}>
            <VStack space={2} mt="3">
              <InputStoreC
                title={"Nombre del producto"}
                placeholder={"Escribe aqui"}
              />
              <InputStoreC title={"Descripción"} placeholder={"Escribe algo"} />
              <InputStoreC title={"Precio"} placeholder={"Escribe algo"} />

              {/* Aqui poner el picker */}
              <InputStoreC title={"Picker"} />
              <Container>
                <Button>Añadir Fotos</Button>
              </Container>
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

export default CreatingProductScreen;
