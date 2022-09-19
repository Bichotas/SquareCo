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
  Badge,
  Heading,
  Pressable,
  Image,
} from "native-base";
import AppText from "../../components/AppText";
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "native-base";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { FlatList, RefreshControl } from "react-native";
import { db } from "../../utils/db.server";
// Context
import { ProfileContext, StoreContext } from "../../auth/context";
import { StorePicture, HeaderPicture } from "../../components/store_components";

const WIDHT = Dimensions.get("window").width;
const HEIGH = Dimensions.get("window").height;

export default function ProfileStore({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const { store } = useContext(StoreContext);
  const [imageUri, setImageUri] = useState(store.profilePicture);
  const [products, setProducts] = useState([]);
  function createProduct() {
    navigation.navigate("Mi tienda", { screen: "CreatingProduct" });
  }
  const { profile } = useContext(ProfileContext);
  useEffect(() => {
    let nameStore = store.nameStore;
    let collectionRef = collection(db, "products");
    const q = query(
      collectionRef,
      // Faltaría obtener el id de la tienda
      where("storeProfileId", "==", `${profile.storeProfileId}`)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          description: doc.data().description,
          createdAt: doc.data().createdAt,
          category: doc.data().category,
          storeProfileId: doc.data().storeProfileId,
          imagesArray: doc.data().imagesArray,
          nameStore: nameStore,
          storeProfileId: doc.data().storeProfileId,
          // Colocar el uid de la tienda
          // uidStore: profile.uid,
        }))
      );
    });
    return unsubscribe;
  }, []);
  const onchange = (event) => {};

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
            onChangeImage={(uri) => setImageUri(uri)}
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
            style={{ marginTop: 12 }}
            data={products}
            keyExtractor={(item) => {
              item.id;
            }}
            numColumns={2}
            renderItem={({ item }) => (
              <Container margin={[3]} marginBottom={[3]}>
                <Pressable
                  bg={"cyan.300"}
                  size={[160, 190, 220]}
                  borderRadius={[20]}
                  _pressed={{ backgroundColor: "red.300" }}
                  onPress={() => {
                    navigation.navigate("Mi tienda", {
                      screen: "ProductDetail",
                      params: { item },
                    });
                  }}
                >
                  {/* Aqui debera poner el icono que debe */}
                  <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                  >
                    {item.imagesArray.map((image, index) => (
                      <Image
                        key={index}
                        source={{ uri: image }}
                        alt="image base"
                        style={styles.wrap}
                        overflow="hidden"
                        resizeMode="cover"
                        borderRadius={20}
                      />
                    ))}
                  </ScrollView>
                </Pressable>
                <Container marginLeft={2} marginTop={1}>
                  <Heading size={"sm"}>{item.title}</Heading>

                  <AppText style={{ fontSize: 12, marginTop: 5 }}>
                    {`$ ${item.price}`}
                  </AppText>
                </Container>
              </Container>
            )}
          />
        </Center>
      </ScrollView>
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
    overflow: "hidden",
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
