import React from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  Divider,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Link,
  Input,
  Button,
  HStack,
  Switch,
  KeyboardAvoidingView,
} from "native-base";

function PasswordChangeScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <KeyboardAvoidingView>
          <Box flex={1} padding={6}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Cambiar contraseña
            </Text>
            <Divider bg={"black"} h={1} />

            {/* Checar la documentacion de como estan los formularios
        Se cambio su forma original, antes en vez de un Text Habia un Form.Label */}
            <VStack space={2} mt="3">
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Correo Electronico
                </Text>
                <Input
                  padding={4}
                  backgroundColor={"gray.300"}
                  placeholder="Correo Electronico"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Nueva contraseña
                </Text>
                <Input
                  padding={4}
                  backgroundColor={"gray.300"}
                  placeholder="Nueva contraseña"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Confirmar contraseña
                </Text>
                <Input
                  padding={4}
                  backgroundColor={"gray.300"}
                  placeholder="Confirmar contraseña"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
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

export default PasswordChangeScreen;
