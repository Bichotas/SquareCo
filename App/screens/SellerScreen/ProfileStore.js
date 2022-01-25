import React, { useContext, useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  Avatar,
  Text,
  Divider,
  Button,
} from "native-base";
import AppText from "../../components/AppText";
import { ScrollView } from "native-base";

import { RefreshControl } from "react-native";

// Firebase things
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";

// Context
import { AuthContext, ProfileContext, StoreContext } from "../../auth/context";
import { StorePicture, HeaderPicture } from "../../components/store_components";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function ProfileStore({ route }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  // Cosas de firebase
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  // Variable de estaod
  const [valores, setValores] = useState();
  const profileContext = useContext(ProfileContext);
  const storeContext = useContext(StoreContext);
  // Se guarda en una variable
  // Fotografia cuenta
  const getData = () => {
    getDoc(
      doc(firestore, "stores", profileContext.profile.storeProfileId)
    ).then((snapshot) => {
      setValores(snapshot.data());
      storeContext.setStore({ ...snapshot.data() });
      setImageUri(valores.profilePicture);
    });
  };

  useEffect(() => {
    getData();
  }, [refreshing]);
  const valoresVariable = { ...valores };
  const [imageUri, setImageUri] = useState(valoresVariable.profilePicture);
  console.log("CONTEXTO");
  console.log(storeContext.store);
  console.log("VARIABLE");
  console.log(valoresVariable);
  return (
    <NativeBaseProvider>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
          ></Box>
          <StorePicture
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
          {/* Texto */}
          <Box alignItems={"center"} marginTop={-20}>
            <AppText style={{ fontWeight: "bold" }}>
              {/* {valoresVariable.nameStore} */}
              {storeContext.store.nameStore}
            </AppText>
            <AppText style={{ fontSize: 12, marginTop: 5 }}>
              {/* {valoresVariable.description} */}
              {storeContext.store.description}
            </AppText>
          </Box>
          <Divider my={3} h={1} width={"90%"}></Divider>
          <Button>Publicar producto</Button>
          {/* <ProductProfile /> */}
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
