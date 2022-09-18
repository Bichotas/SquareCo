import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  NativeBaseProvider,
} from "native-base";

export default function ProductDetail({ route, navigation }) {
  useEffect(() => {
    console.log(route.params);
  }, []);
  const { width, height } = useWindowDimensions();

  const onchange = (event) => {};
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Heading size="lg" color="primary.500">
            {route.params.item.title}
          </Heading>
          <Heading size="md" color="primary.700" my={3}>
            {route.params.item.nameStore}
          </Heading>
          <Box
            width={"100%"}
            height={height / 3.5}
            bg={"cyan.300"}
            my={2}
            borderRadius={20}
          ></Box>
          <Heading size="md" color="green.500" my={1}>
            Precio: {`$ ${route.params.item.price}`}
          </Heading>
          <Heading size="sm" color="primary.700" my={1}>
            Descripción: {route.params.item.description}
          </Heading>
          <Center p={8}>
            <Button size={"sm"}>Agregar al carrito</Button>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  wrap: {},
});

{
  /* <SafeAreaView style={styles.container}>
  <NativeBaseProvider>
    <View>
      <Heading size={"xl"}>Title: {route.params.item.title}</Heading>
      <Text> price: {route.params.item.price}</Text>
      <Text> description: {route.params.item.description}</Text>
      {route.params.item.imagesArray.map((image) => (
        <Image source={{ uri: image }} alt="image base" size="2xl" />
      ))}
    </View>
  </NativeBaseProvider>
</SafeAreaView>; */
}
