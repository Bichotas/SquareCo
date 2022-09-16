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
} from "native-base";
import AppText from "../../components/AppText";
import { ScrollView } from "native-base";

import { RefreshControl } from "react-native";

// Firebase things
import {
  getDoc,
  getFirestore,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";

// Context
import { ProfileContext, StoreContext } from "../../auth/context";
import { StorePicture, HeaderPicture } from "../../components/store_components";

import { ProductStore } from "../../components/store_components";
import ListOfProductStore from "../../components/store_components/ListOfProductStore";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function ProfileStore({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [products, setProducts] = useState([]);
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
  async function getProducts() {
    let wea = [];
    getDocs(
      collection(
        firestore,
        "stores",
        profileContext.profile.storeProfileId,
        "products"
      )
    ).then((snap) => {
      console.log(
        snap.forEach((doc) => {
          wea.push(doc.data());
        })
      );
      setProducts(wea);
    });
    console.log("Despertar esa sensanción de más", products);
  }

  useEffect(() => {
    getData();
    getProducts();
  }, [refreshing]);

  function createProduct() {
    navigation.navigate("Mi tienda", { screen: "CreatingProduct" });
  }
  const valoresVariable = { ...valores };
  const [imageUri, setImageUri] = useState(valoresVariable.profilePicture);
  const caca = { ...products };
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
          <Button onPress={createProduct}>Publicar producto</Button>
          {/* <ProductProfile /> */}

          {/* Apartir de aqui se van a mostrar los productos de la tienda */}
          <Box flexDirection="row">
            {products.map((product) => (
              <ProductStore
                name={product.productName}
                onPress={() => console.log(product.price)}
              />
            ))}
          </Box>
          <Button onPress={getProducts}>Obtener los productos info</Button>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}


// ---
import React, { useContext, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  KeyboardAvoidingView,
  VStack,
  ScrollView,
  Center,
  Select,
  Button,
  Container,
} from "native-base";

import { CommonActions } from "@react-navigation/native";

import HeaderScreenC from "../../components/HeaderScreenC";
import ImagePicker from "../../components/store_components/ImagePicker";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import * as Yup from "yup";
import ImagePickerList from "../../components/store_components/ImagePickerList";
import FormImagePicker from "../../components/store_components/FormImagePicker";

// Cosas de firebase

import { AuthContext, ProfileContext } from "../../auth/context";

import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";

// Refactor Import
import { db } from "../../utils/db.server";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .label("Imagenes"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function CreatingProductScreen({ navigation }) {
  // Cosas del firebase

  const profileContext = useContext(ProfileContext);
  const { uid, storeProfileId } = profileContext.profile;

  async function createProduct(values) {
    const docRef = collection(db, `products`);
    await addDoc(docRef, {
      title: values.title,
      description: values.description,
      price: values.price,
      category: values.category,
      imagesArray: values.images,
      createdAt: new Date(),
      storeProfileId: storeProfileId,
    }).then((snapshot) => {
      console.log(console.log("ID del nuevo: ", snapshot.id));
    });
    navigation.dispatch(CommonActions.goBack());
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* Si es necesario, quitar el encabezado */}
        <HeaderScreenC title={"Publicacion del producto"} />
        <KeyboardAvoidingView>
          <Form
            initialValues={{
              title: "",
              price: "",
              description: "",
              category: null,
              images: [],
            }}
            onSubmit={(values) => createProduct(values)}
            validationSchema={validationSchema}
          >
            <FormImagePicker name={"images"} />
            <FormField maxLength={255} name="title" placeholder="Title" />
            <FormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <Picker items={categories} name="category" placeholder="Category" />
            <FormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />
            <SubmitButton title="Post" />
          </Form>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CreatingProductScreen;
