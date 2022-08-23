import React from "react";
import {
  NativeBaseProvider,
  FlatList,
  VStack,
  ScrollView,
  Center,
} from "native-base";
import { CategoryComponentC } from "../../components/lists";
const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    navigate: "furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    navigate: "cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    navigate: "carmeras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    navigate: "games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    navigate: "clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    navigate: "sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies",
    navigate: "movies",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    navigate: "books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    navigate: "other",
    value: 9,
  },
];
function ShopCategoriesScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center>
        <ScrollView nestedScrollEnabled={true}>
          <VStack paddingTop={10}>
            <FlatList
              scrollEnabled={false}
              numColumns={3}
              data={categories}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <CategoryComponentC
                  name={item.label}
                  backgroundColor={item.backgroundColor}
                  onPress={() => navigation.navigate("CategoryStores", item)}
                />
              )}
            />
          </VStack>
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
}

export default ShopCategoriesScreen;
