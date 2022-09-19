import React, { useContext, useEffect, useState } from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  Box,
  Divider,
  Modal,
  Text,
  Button,
  Select,
  VStack,
  CheckIcon,
  Container,
} from "native-base";
import ImageProductC from "../../components/feed/ImageProductC";
import FeedListC from "../../components/feed/FeedListC";
import CreatingStoreScreen from "../../screens/SellerScreen/CreatingStoreScreen";
import { Form, FormField, SubmitButton } from "../../components/forms2";
import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
// Cosaas de firebase
import { signOut } from "firebase/auth";

import { AuthContext, ProfileContext, StoreContext } from "../../auth/context";
// Refactor Import
import { db } from "../../utils/db.server";
import { auth } from "../../utils/auth.client";
import { Firebase } from "../../utils/firebaseConfig";
import { ref } from "firebase/storage";
import { handleProductsRandom } from "./utils";
const valores = [
  { value: 1, name: "UWu" },
  { value: 2, name: "DOs" },
  { value: 3, name: "tres" },
  { value: 4, name: "cuatr" },
  { value: 5, name: "cicio" },
  { value: 6, name: "seis" },
  { value: 7, name: "siete" },
  { value: 8, name: "ochco" },
  { value: 9, name: "nueve" },
  { value: 10, name: "Diez" },
];
function FeedHomeScreen({ navigation }) {
  // Contexto
  const { profile, setProfile } = useContext(ProfileContext);
  const { store, setStore } = useContext(StoreContext);
  // UseState
  let [service, setService] = React.useState("");
  const [button, setbutton] = useState(true);
  const [showModal, setShowModal] = useState(true);

  // Funcion para crear documento de la tienda
  async function handleStore(values, category) {
    const docRef = collection(db, "stores");
    await addDoc(docRef, {
      // Hacemos un documento en la colección stores
      nameStore: values.nameStore,
      description: values.description,
      category: category,
      userId: profile.uid,
      profilePicture: null,
    }).then((snapshot) => {
      // Con el id del documento que agregamos vamos a agregar este mismo id
      // al campo del documento del usuario en la parte de storeId
      let docUserRef = doc(db, `users/${profile.uid}`);
      updateDoc(docUserRef, {
        storeProfileId: snapshot.id,
      });
      let newUser = { ...profile, storeProfileId: snapshot.id };
      setProfile(newUser);

      // Faltaría setear los contextos a string vacios ""
      setStore({
        nameStore: values.nameStore,
        description: values.description,
        category: category,
        userId: profile.uid,
        profilePicture: null,
      });
      signOut(auth);
      setProfile("");
      setStore("");
      // navigation.navigate("Mi tienda");
    });
  }
  useEffect(() => {
    let productShow = handleProductsRandom();
    console.log(productShow);
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center flex={1} justifyContent="flex-start" padding={4}>
          <Box
            bg="gray.400"
            _text={{ color: "white", alignSelf: "center" }}
            //   { Poner otro valor que sea menor para adaptar el valor }

            w={"100%"}
            h={[150, 230, 260, 400]}
            rounded={"2xl"}
            justifyContent="flex-end"
            alignItems="center"
          ></Box>
          <Divider my={4} />
          {/* Aqui iran los productos */}

          {/* Mensaje para ir a crear la tienda si es que no se ha creado */}
          {/* Hacerlo un componente para que no haya tanto codigo y no sea tan sucio */}
          {profile.storeProfileId == null && profile.typeAccount == "vendedor" && (
            <Form
              initialValues={{
                nameStore: "",
                description: "",
                category: "",
              }}
              onSubmit={(values) => handleStore(values, service)}
            >
              <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size={"xl"}
                closeOnOverlayClick={false}
              >
                <Modal.Content>
                  <Modal.Header fontWeight={"bold"} fontSize={20}>
                    <Text fontWeight={"bold"} fontSize={20}>
                      Crea tu tienda
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>Nombre de la tienda</Text>
                    <FormField
                      name={"nameStore"}
                      placeholder={"Nombre de la tienda"}
                    />
                    <Text>Descripción</Text>
                    <FormField
                      name={"description"}
                      placeholder={"Descripción"}
                    />
                    <Text>Categoría</Text>
                    <VStack alignItems="center" space={4}>
                      {/* Hacer luego un componente picker para tenerlo y que use una Flatlist para terminarlo */}
                      <Select
                        selectedValue={service}
                        width={"100%"}
                        variant="filled"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setService(itemValue)}
                      >
                        <Select.Item label="Furniture" value="furniture" />
                        <Select.Item label="Cars" value="cars" />
                        <Select.Item label="Cameras" value="cameras" />
                        <Select.Item label="Games" value="games" />
                        <Select.Item label="Clothes" value="clothes" />
                        <Select.Item label="Sports" value="sports" />
                        <Select.Item label="Movies" value="movies" />
                        <Select.Item label="Books" value="books" />
                        <Select.Item label="Others" value="others" />
                      </Select>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer>
                    <SubmitButton title={"Si"} />
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Form>
          )}
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default FeedHomeScreen;
