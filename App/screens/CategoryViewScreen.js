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
  Divider,
  Pressable,
} from "native-base";

const valores = [
  { item: 1, name: "UWu" },
  { item: 2, name: "DOs" },
  { item: 3, name: "tres" },
  { item: 4, name: "cuatr" },
  { item: 5, name: "cicio" },
  { item: 6, name: "seis" },
  { item: 7, name: "siete" },
  { item: 8, name: "ochco" },
  { item: 9, name: "nueve" },
];
function CategoryViewScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center
          padding={1}
          flex={1}
          paddingTop={3}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          {/* Titulo de la categoria */}
          <Box
            bg={"gray.700"}
            paddingX={[16, 24, 32]}
            paddingY={[1.5, 3, 4]}
            borderRadius={10}
            _text={{
              fontSize: ["lg", "xl", "2xl"],
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            [Categoria]
          </Box>

          {/* Fin del Titulo */}
          <Divider marginTop={5} width={"90%"} />

          {/* Tiendas con un ScrolLvIEW */}
          <ScrollView horizontal>
            <VStack space={2} paddingTop={4}>
              <FlatList
                data={valores}
                numColumns={("3", "2")}
                keyExtractor={({ item }) => item.item}
                renderItem={({ item }) => (
                  <Center
                    marginBottom={5}
                    marginX={[2, 3]}
                    key={({ item }) => item.name}
                  >
                    <Pressable
                      bg={"gray.500"}
                      size={[120, 170, 220]}
                      borderRadius={[21, 40, 60]}
                      onPress={() => console.log(item)}
                      _pressed={{
                        bg: "gray.600",
                      }}
                    ></Pressable>
                    <View width={"80%"}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={[16, 22, 30]}
                        textAlign={"center"}
                      >
                        [Nombre de la tienda]
                      </Text>
                    </View>
                  </Center>
                )}
              />
            </VStack>
          </ScrollView>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CategoryViewScreen;
