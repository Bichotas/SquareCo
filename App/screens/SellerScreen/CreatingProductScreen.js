import React, { useState } from "react";
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

import HeaderScreenC from "../../components/HeaderScreenC";
import ImagePicker from "../../components/store_components/ImagePicker";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function CreatingProductScreen(props) {
  const [imageUri, setImageUri] = useState();
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
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <ImagePicker
              imageUri={imageUri}
              onChangeImage={(uri) => setImageUri(uri)}
            />
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
