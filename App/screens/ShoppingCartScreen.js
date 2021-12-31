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
import ProductoInShippingCart from "../components/ProductoInShippingCart";
function ShoppingCartScreen(props) {
  return (
    <NativeBaseProvider>
      <HeaderScreenC title={"Carrito"} />

      {/* Lista de los productos */}
      <Center justifyContent={"flex-start"} flex={1}>
        <ScrollView marginBottom={3}>
          <VStack space={4}>
            <ProductoInShippingCart />
          </VStack>
        </ScrollView>
        <Divider height={1} bg={"black"} width={"90%"} margin={2}></Divider>
      </Center>
      {/* Fin de la lista */}

      {/* Texto  */}
      <Box paddingX={4}>
        <VStack padding={3}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={20} fontWeight={"bold"}>
              Total:
            </Text>
            <Text>[TOTAL]</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={15}>Cantidad:</Text>
            <Text>[Cantidad]</Text>
          </HStack>
        </VStack>
      </Box>
      {/* Fin del texto */}

      {/* Boton */}
      <Center padding={2}>
        <Button
          _text={{
            fontSize: 16,
            fontWeight: "bold",
          }}
          borderRadius={20}
          py={1}
        >
          Proceder al pago
        </Button>
      </Center>
      {/* Fin del boton */}
    </NativeBaseProvider>
  );
}

export default ShoppingCartScreen;
