import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Center,
  Container,
  NativeBaseProvider,
  FlatList,
} from "native-base";

export default function CategoryStores({ route }) {
  const [storeCategory, setstoreCategory] = useState([]);
  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box
          width={"60%"}
          marginTop={5}
          borderRadius={10}
          borderWidth={1}
          borderColor={route.params.backgroundColor}
          paddingY={2}
          background={route.params.backgroundColor}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text
            fontSize={"lg"}
            fontWeight={"bold"}
            letterSpacing={"1"}
            color={"gray.200"}
          >
            {route.params.label}
          </Text>
        </Box>
        <FlatList />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
