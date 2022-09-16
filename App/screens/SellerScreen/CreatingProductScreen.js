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
    // Subir las imagenes a firebase  storage
    // Obtener los links de las imagenes y colocarlos en un array
    values.images.map(async (image) => {
      const response = await fetch(image);
      const blob = await response.blob();
      console.log("----Blob y Response de la imagen----");
      console.log(response, blob);
      const ref = storage().ref().child(`post/${image.name}`);
      await ref.put(blob);
      const url = await ref.getDownloadURL();
      console.log(url);
    });
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
      console.log(console.log("ID del nuevo producto: ", snapshot.id));
    });
    navigation.dispatch(CommonActions.goBack());
  }

  async function checkValues(values) {
    console.log(values.images);
    let newResutl;
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
