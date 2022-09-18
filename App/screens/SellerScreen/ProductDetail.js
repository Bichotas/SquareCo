import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Image,
  NativeBaseProvider,
  Divider,
} from "native-base";

const WIDHT = Dimensions.get("window").width;
const HEIGH = Dimensions.get("window").height;

export default function ProductDetail({ route, navigation }) {
  const [imgActive, setimgActive] = useState(0);
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
            style={styles.wrap}
            height={height / 3.5}
            bg={"cyan.300"}
            my={2}
            borderRadius={20}
          >
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
            >
              {route.params.item.imagesArray.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  alt="image base"
                  style={styles.wrap}
                  resizeMode="cover"
                  width={width / 0.25}
                  height={height / 3.5}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {route.params.item.imagesArray.map((e, index) => (
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ⚫
                </Text>
              ))}
            </View>
          </Box>
          <Heading size="md" color="gray.500" my={1}>
            Precio:{" "}
            <Text color={"green.500"}>{`$${route.params.item.price}`}</Text>
          </Heading>
          <Heading size="sm" color="gray.500" my={1}>
            Descripción:{" "}
            <Text color={"blueGray.400"}>{route.params.item.description}</Text>
          </Heading>
          <Center p={8}>
            <Button size={"sm"} p={4} borderRadius={10}>
              Agregar al carrito
            </Button>
          </Center>
          <Divider h={1} />
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
  wrap: {
    width: WIDHT,
    height: HEIGH * 0.25,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "#8888",
  },
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
