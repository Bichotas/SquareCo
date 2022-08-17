import React, { useContext, useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  Avatar,
  Text,
  Divider,
  Button,
  HStack,
  Container,
  Spacer,
  Badge
} from "native-base";
import AppText from "../../components/AppText";
import { ScrollView } from "native-base";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { FlatList, RefreshControl } from "react-native";
import { db } from "../../utils/db.server";
// Context
import { ProfileContext, StoreContext } from "../../auth/context";
import { StorePicture, HeaderPicture } from "../../components/store_components";
export default function ProfileStore({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const { store } = useContext(StoreContext);
  const [imageUri, setImageUri] = useState(store.profilePicture);
  const [products, setProducts] = useState([]);
  function createProduct() {
    navigation.navigate("Mi tienda", { screen: "CreatingProduct" });
  }
  useEffect(() => {
    let collectionRef = collection(db, "products");
    const q = query(collectionRef, orderBy("price", "desc"));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setProducts(
        querySnapshot.docs.map(doc => ({
          id: doc.data().id,
          title: doc.data().title,
          price: doc.data().price,
          storeProfileId: doc.data().storeProfileId
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} />}>
        <Center flex={1} justifyContent="flex-start" padding={4}>
          {/* Cuadro para la portada*/}
          <Box
            bg="purple.900"
            _text={{ color: "white", alignSelf: "center" }}
            //   { Poner otro valor que sea menor para adaptar el valor }

            w={"100%"}
            h={[150, 230, 260, 400]}
            rounded={"2xl"}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Badge
              backgroundColor={"red.200"}
              color="white"
              position={"relative"}
              bottom={125}
              left={155}
              borderRadius={10}
              p={2}
            >
              {store.category}
            </Badge>
          </Box>
          <StorePicture
            imageUri={imageUri}
            onChangeImage={uri => setImageUri(uri)}
          />
          {/* Texto */}
          <Box alignItems={"center"} marginTop={-20}>
            <AppText style={{ fontWeight: "bold" }}>
              {/* {valoresVariable.nameStore} */}
              {/* {storeContext.store.nameStore} */}
              {store.nameStore}
            </AppText>
            <AppText style={{ fontSize: 12, marginTop: 5 }}>
              {/* {valoresVariable.description} */}
              {/* {storeContext.store.description} */}
              {store.description}
            </AppText>
          </Box>
          <Divider my={3} h={1} width={"90%"}></Divider>
          <Button onPress={createProduct}>Publicar producto</Button>
          <FlatList
            data={products}
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({ item }) => (
              <Box key={item.id} marginBottom={2}>
                <Box
                  flexDirection="column"
                  justifyContent="space-between"
                  backgroundColor={"cyan.300"}
                >
                  <AppText>{item.title}</AppText>
                  <AppText>{item.storeProfileId}</AppText>
                </Box>
              </Box>
            )}
          />
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
