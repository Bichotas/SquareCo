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
import ReturnArrow from "../../components/ReturnArrow";
import { CommonActions } from "@react-navigation/native";
import { ScrollView } from "native-base";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../utils/db.server";
export default function CategoryStores({ route, navigation }) {
  const [storeCategory, setstoreCategory] = useState([]);
  // useEffect(() => {
  //   let category = route.params.category;
  //   let collectionRef = collection(db, "stores");
  //   const q = query(
  //     collectionRef,
  //     // Faltaría obtener el id de la tienda
  //     where("category", "==", route.params.where)
  //   );

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     setstoreCategory(
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         title: doc.data().title,
  //         price: doc.data().price,
  //         description: doc.data().description,
  //         createdAt: doc.data().createdAt,
  //         category: doc.data().category,
  //         storeProfileId: doc.data().storeProfileId,
  //       }))
  //     );
  //   });
  //   console.log(storeCategory);
  //   return unsubscribe;
  // }, []);
  useEffect(() => {
    let condition = route.params.navigate;
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
