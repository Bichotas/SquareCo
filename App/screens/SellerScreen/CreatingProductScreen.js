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
  Text,
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

import { collection, addDoc } from "firebase/firestore";
// Refactor Import
import { db } from "../../utils/db.server";
import { storage } from "../../utils/storage.server";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// --- VALIDATION SCHEMA ---

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .label("Imagenes"),
});

// --- CATEGORIES FOR PRODUCTS ---
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function CreatingProductScreen({ navigation }) {
  const profileContext = useContext(ProfileContext);
  const { uid, storeProfileId } = profileContext.profile;

  // Funcion para crear un producto y subir las imagenes
  async function createProduct(values) {
    // --- UPLOAD IMAGES AND GET URLS ---

    // Se coloca un array vacio en donde se van a "pushear" las urls de las imagenes
    let images = [];

    // Se itera el array de imagenes
    for (let i = 0; i < values.images.length; i++) {
      // Colocamos en una constate temporal la imagen según el ciclo en el que se esta
      const image = values.images[i];

      // -- Definir que hacen las dos lineas de codigo siguiente
      let response = await fetch(image);
      let blob = await response.blob();

      // Referencia de la carpeta en el bucket y el nombre que va a tener la imagen
      //    -- En este caso sería el nombre que se tiene desde un inicio
      // @TODO: Hacer una combinación para mejorar el nombre de la imagen
      const storageRef = ref(storage, `products/${blob._data.name}`);

      // Subimos la imagen al bucket con el metodo uploadBytes -- Este utiliza un blob
      await uploadBytes(storageRef, blob);
      // Se consigue la url con la referencia de la imagen
      // --> Esto ya que se subio y ya hay una referencia en el buckets
      const url = await getDownloadURL(storageRef);
      // Se pushea la url al array de imagenes
      images.push(url);
    }

    // --- CREATE DOC PRODUCT ---

    // Referencia de la coleccion de productos
    const docRef = collection(db, `products`);

    // Se manda a llamar la funcion para crear el producto en la coleccion con los atributos que tienen adentro como segundo parametro de la funcion
    await addDoc(docRef, {
      title: values.title,
      description: values.description,
      price: values.price,
      category: values.category,
      imagesArray: images,
      createdAt: new Date(),
      storeProfileId: storeProfileId,
    }).then((snapshot) => {
      console.log(console.log("ID del nuevo producto: ", snapshot.id));
    });

    // Una vez creado el producto se regresa a la pantalla de productos
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
            <Text fontSize={"xs"} italic color={"danger.00"}>
              *La primera imagen que eliga es la que se va a mostrar primero*
            </Text>
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
