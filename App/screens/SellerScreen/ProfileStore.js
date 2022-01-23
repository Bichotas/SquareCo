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
import StorePicture from "../../components/store_components/StorePicture";
export default function ProfileStore({ route }) {
  const [valores, setValores] = useState();

  // Fotografia cuenta
  const getData = () => {
    getDoc(
      doc(firestore, "stores", profileContext.profile.storeProfileId)
    ).then((snapshot) => setValores(snapshot.data()));
    return valores;
  };
  // Forma original en la que se obtienen los datos y se guardan en la useState valores
  // useEffect(() => {
  //   getDoc(
  //     doc(firestore, "stores", profileContext.profile.storeProfileId)
  //   ).then((docSnap) => {
  //     setValores({ ...docSnap.data() });
  //   });
  // }, []);

  // Forma en la que ejecuta la funcion, la guarda en una variable "a"
  useEffect(() => {
    const a = getData();
  }, []);
  const valoresVariable = { ...valores };
  const [imageUri, setImageUri] = useState();
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const profileContext = useContext(ProfileContext);
  // Funcioon para obtener los datos del documento

  // Con la función, los valores que se llaman se guardan en la variable waa y se guardan
  console.log(valoresVariable);
  console.log(imageUri);
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
          {/* <Avatar
            borderColor={"purple.500"}
            borderWidth={7}
            size={[100, 145, 195, 245]}
            position={"relative"}
            // En la lista, se va a colocar diferente valores [50m 100, 150] si es que se logra hacer que el valor del tamaño del avatar se reduzca segun el breakPoint
            bottom={[50, 70, 100]}
            source={{ uri: profileContext.profile.urlProfile }}
          ></Avatar> */}
          <StorePicture
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
          {/* Texto */}
          <Box alignItems={"center"} marginTop={-10}>
            <AppText style={{ fontWeight: "bold" }}>
              {valoresVariable.nameStore}
            </AppText>
            <AppText style={{ fontSize: 12, marginTop: 5 }}>
              {valoresVariable.description}
            </AppText>
          </Box>
          <Divider my={3} h={1} width={"90%"}></Divider>

          {/* <ProductProfile /> */}
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
