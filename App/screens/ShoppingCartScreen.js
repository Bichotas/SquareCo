import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
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
        <ScrollView padding={(4, 4, 4)} marginBottom={3}>
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
          <VStack space={4}>
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
                <Container width={168} height={"100%"}>
                  <Text
                    color={"white"}
                    marginTop={3}
                    fontSize={16}
                    fontWeight={"bold"}
                    numberOfLines={2}
                  >
                    [Nombre del productoadsfadsfs]
                  </Text>

                  <Text color={"white"} marginBottom={4} fontSize={15} italic>
                    Precio
                  </Text>
                </Container>
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
                <Container width={168} height={"100%"}>
                  <Text
                    color={"white"}
                    marginTop={3}
                    fontSize={16}
                    fontWeight={"bold"}
                    numberOfLines={2}
                  >
                    [Nombre del productoadsfadsfs]
                  </Text>

                  <Text color={"white"} marginBottom={4} fontSize={15} italic>
                    Precio
                  </Text>
                </Container>
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
                <Container width={168} height={"100%"}>
                  <Text
                    color={"white"}
                    marginTop={3}
                    fontSize={16}
                    fontWeight={"bold"}
                    numberOfLines={2}
                  >
                    [Nombre del productoadsfadsfs]
                  </Text>

                  <Text color={"white"} marginBottom={4} fontSize={15} italic>
                    Precio
                  </Text>
                </Container>
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
                <Container width={168} height={"100%"}>
                  <Text
                    color={"white"}
                    marginTop={3}
                    fontSize={16}
                    fontWeight={"bold"}
                    numberOfLines={2}
                  >
                    [Nombre del productoadsfadsfs]
                  </Text>

                  <Text color={"white"} marginBottom={4} fontSize={15} italic>
                    Precio
                  </Text>
                </Container>
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
                <Container width={168} height={"100%"}>
                  <Text
                    color={"white"}
                    marginTop={3}
                    fontSize={16}
                    fontWeight={"bold"}
                    numberOfLines={2}
                  >
                    [Nombre del productoadsfadsfs]
                  </Text>

                  <Text color={"white"} marginBottom={4} fontSize={15} italic>
                    Precio
                  </Text>
                </Container>
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
                <Container width={168} height={"100%"}>
                  <Text
                    color={"white"}
                    marginTop={3}
                    fontSize={16}
                    fontWeight={"bold"}
                    numberOfLines={2}
                  >
                    [Nombre del productoadsfadsfs]
                  </Text>

                  <Text color={"white"} marginBottom={4} fontSize={15} italic>
                    Precio
                  </Text>
                </Container>
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
        <Divider height={2} bg={"black"}></Divider>
        <Text>HOLA</Text>
        <Text>HOLA</Text>
        <Text>HOLA</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default ShoppingCartScreen;
