import React from "react";
import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  VStack,
  Text,
  Container,
  FlatList,
  View,
  ScrollView,
} from "native-base";

const valores = [
  { item: 1, name: "UWu" },
  { item: 2, name: "DOs" },
  { item: 3, name: "tres" },
  { item: 4, name: "cuatr" },
  { item: 5, name: "cicio" },
  { item: 6, name: "seis" },
];
function CategoryViewScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* Se agrego un scroll view horizontal para las personas con menos resolucion, que son de >320 */}
        {/* Quitar si hay algun problema */}
        <ScrollView horizontal>
          <Center
            flex={1}
            padding={4}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            {/* Nombre */}
            <HStack margin={4}>
              <Box
                bg={"gray.700"}
                paddingX={12}
                paddingY={2}
                borderRadius={10}
                _text={{
                  fontSize: "lg",
                  fontWeight: "bold",
                }}
              >
                [Categoria]
              </Box>
            </HStack>
            {/* FinNombre */}

            {/* FlatList */}
            <VStack>
              {/* <Container>
            <Box bg={"gray.500"} size={135} borderRadius={21}></Box>
            <Text fontWeight={"bold"} fontSize={16} textAlign={"center"}>
              [Nombre de la tienda]
            </Text>
          </Container> */}

              <FlatList
                data={valores}
                keyExtractor={({ item }) => item.item}
                renderItem={({ item }) => (
                  <Center
                    marginBottom={5}
                    marginX={[1, 2]}
                    key={({ item }) => item.item}
                  >
                    <Box bg={"gray.500"} size={[125]} borderRadius={21}></Box>
                    <View width={"80%"}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={16}
                        textAlign={"center"}
                      >
                        [Nombre de la tienda]
                      </Text>
                    </View>
                  </Center>
                )}
                numColumns={"2"}
              />
            </VStack>
            {/* Fin FlatList */}
          </Center>
        </ScrollView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CategoryViewScreen;
