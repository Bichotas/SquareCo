import React from "react";
import { Box, Center, Pressable, Text, View } from "native-base";
function CategoryComponentC({ name, onPress, backgroundColor = "gray.400" }) {
  return (
    <Center marginBottom={5} padding={4}>
      <Pressable
        bg={backgroundColor}
        size={[100, 150, 200]}
        borderRadius={[20, 30, 50]}
        onPress={onPress}
        _pressed={{
          bg: "gray.600",
        }}
      ></Pressable>
      <View width={"80%"}>
        <Text fontWeight={"bold"} fontSize={[16, 22, 30]} textAlign={"center"}>
          {name}
        </Text>
      </View>
    </Center>
  );
}

export default CategoryComponentC;
