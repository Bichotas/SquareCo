import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  KeyboardAvoidingView,
  Divider,
  FormControl,
  Input,
  VStack,
  ScrollView,
  Center,
  Button,
} from "native-base";
function CreatingStoreScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <KeyboardAvoidingView>
          <Box flex={1} padding={6} marginTop={10}>
            {/* Checar la documentacion de como estan los formularios
  Se cambio su forma original, antes en vez de un Text Habia un Form.Label */}
            <VStack space={2} mt="3">
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Nombre de tu tienda
                </Text>
                <Input
                  padding={4}
                  placeholder="Correo Electronico"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Descripcion
                </Text>
                <Input
                  padding={7}
                  placeholder="Nueva contraseña"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
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
