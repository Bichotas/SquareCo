import {  StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Box, Heading, Image, NativeBaseProvider } from "native-base";

export default function ProductDetail({ route, navigation }) {
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (
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
  );
}

const styles = StyleSheet.create({});
