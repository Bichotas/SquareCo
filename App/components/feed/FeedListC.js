import React from "react";
import { Center, ScrollView, VStack, FlatList } from "native-base";

// Componente
import ImageProductC from "./ImageProductC";
function FeedListC({ list }) {
  return (
    <Center>
      <VStack paddingTop={10}>
        <FlatList
          numColumns={3}
          data={list}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <ImageProductC
              name={item.name}
              backgroundColor="gray.600"
              onPress={({ item }) => console.log(item)}
            />
          )}
        />
      </VStack>
    </Center>
  );
}

export default FeedListC;
