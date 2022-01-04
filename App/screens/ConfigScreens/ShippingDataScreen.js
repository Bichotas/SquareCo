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
import ReturnArrow from "../../components/ReturnArrow";
function ShippingDataScreen({ navigation }) {
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <KeyboardAvoidingView>
          <Box flex={1} padding={6}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Datos de envio
            </Text>
            <Divider bg={"black"} h={1} />

            {/* Checar la documentacion de como estan los formularios
        Se cambio su forma original, antes en vez de un Text Habia un Form.Label */}
            <VStack space={2} mt="0">
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Nombre de la calle
                </Text>
                <Input
                  padding={4}
                  backgroundColor={"gray.300"}
                  placeholder="Nombre de la calle"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
              <HStack flex={1} space={3} alignItems={"center"}>
                <FormControl width={"40%"}>
                  <Text fontWeight={"bold"} fontSize={16} padding={2}>
                    Codigo Postal
                  </Text>
                  <Input
                    padding={4}
                    backgroundColor={"gray.300"}
                    placeholder="Codigo Postal"
                    borderRadius={15}
                    fontSize={15}
                  />
                </FormControl>
                <FormControl width={"49%"}>
                  <Text fontWeight={"bold"} fontSize={16} padding={2}>
                    Número telefonico
                  </Text>
                  <Input
                    padding={4}
                    backgroundColor={"gray.300"}
                    placeholder="Nombre de la calle"
                    borderRadius={15}
                    fontSize={15}
                  />
                </FormControl>
              </HStack>
            </VStack>

            {/* En vez de un switch - Se debe de usar un Segment Component o un Tab View */}
          </Box>
          <Center>
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
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ShippingDataScreen;
