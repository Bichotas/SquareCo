import React, { useContext, useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  Avatar,
  Text,
  Divider,
} from "native-base";
import AppText from "../../components/AppText";
import { ScrollView } from "native-base";

// Firebase things
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";

// Context
import { AuthContext, ProfileContext } from "../../auth/context";
export default function ProfileStore({ route }) {
  const [valores, setValores] = useState();
  const [segundos, setSegundos] = useState();
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const profileContext = useContext(ProfileContext);
  const getData = () => {
    getDoc(
      doc(firestore, "stores", profileContext.profile.storeProfileId)
    ).then((snapshot) => setValores(snapshot.data()));
    return valores;
  };
  // useEffect(() => {
  //   getDoc(
  //     doc(firestore, "stores", profileContext.profile.storeProfileId)
  //   ).then((docSnap) => {
  //     setValores({ ...docSnap.data() });
  //   });
  // }, []);

  useEffect(() => {
    const a = getData();
  }, []);

  const waa = { ...valores };
  console.log(waa);
  return (
    <NativeBaseProvider>
      <ScrollView>
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

          {/* Avatar*/}
          <Avatar
            borderColor={"purple.500"}
            borderWidth={7}
            size={[100, 145, 195, 245]}
            position={"relative"}
            // En la lista, se va a colocar diferente valores [50m 100, 150] si es que se logra hacer que el valor del tamaño del avatar se reduzca segun el breakPoint
            bottom={[50, 70, 100]}
          ></Avatar>
          {/* Texto */}
          <Box alignItems={"center"} marginTop={-10}>
            <AppText style={{ fontWeight: "bold" }}>
              [NOMBRE DE LA TIENDA]
            </AppText>
            <AppText style={{ fontSize: 12, marginTop: 5 }}>
              {waa.category}
            </AppText>
          </Box>
          <Divider my={3} h={1} width={"90%"}></Divider>

          {/* <ProductProfile /> */}
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
