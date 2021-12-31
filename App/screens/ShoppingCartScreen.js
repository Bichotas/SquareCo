import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";

// Componentes
import HeaderScreenC from "../components/HeaderScreenC";
function ShoppingCartScreen(props) {
  return (
    <NativeBaseProvider>
      <HeaderScreenC title={"Carrito"} />

      <Center justifyContent={"flex-start"} flex={1}>
        <ScrollView>
          {/* <VStack space={5}>
            <Box width={340} height={90} bg={"gray.400"} borderRadius={15}>
              <HStack space={2}>
                <Box size={60} bg={"gray.800"} borderRadius={12} />
              </HStack>
            </Box>
            <Box
              width={340}
              height={90}
              bg={"gray.400"}
              borderRadius={15}
            ></Box>
          </VStack> */}
          {/* Este es para el componente del RPODUCTO */}
          <VStack>
            <HStack
              space={3}
              bg={"gray.800"}
              height={100}
              width={350}
              borderRadius={12}
            >
              <Box
                bg={"gray.500"}
                // El tamaño correcto deberia de ser 70, pero el boton de eliminar se ve mal por el espacio a su derecha
                size={65}
                alignSelf={"center"}
                marginLeft={4}
                borderRadius={10}
              />
              <VStack justifyContent={"space-between"}>
                <Text
                  color={"white"}
                  marginTop={3}
                  fontSize={16}
                  fontWeight={"bold"}
                >
                  [Nombre del producto]
                </Text>
                <Text color={"white"} marginBottom={4}>
                  Precio
                </Text>
              </VStack>
              <Center justifyContent={"flex-end"}>
                <Button
                  borderRadius={7}
                  py={1.2}
                  px={2}
                  marginBottom={3}
                  marginRight={3}
                >
                  Eliminar
                </Button>
              </Center>
            </HStack>
          </VStack>
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
}

export default ShoppingCartScreen;
