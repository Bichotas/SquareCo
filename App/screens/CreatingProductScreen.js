import React from "react";
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
import InputStoreC from "../components/forms/InputStoreC";
import HeaderScreenC from "../components/HeaderScreenC";
import AppForm from "../components/forms/AppForm";
import AppFormFIeld from "../components/forms/AppFormFIeld";
import * as Yup from "yup";
import SubmitButton from "../components/forms/SubmitButton";

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
  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* Si es necesario, quitar el encabezado */}
        <HeaderScreenC title={"Publicacion del producto"} />
        <KeyboardAvoidingView>
          <Box flex={1} padding={6} marginTop={10}>
            <VStack space={2} mt="3">
              <AppForm
                initialValue
                s={{
                  title: "",
                  price: "",
                  description: "",
                  category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
              >
                <AppFormFIeld
                  maxLength={255}
                  name="title"
                  placeholder="Title"
                />
                <SubmitButton />
              </AppForm>
            </VStack>
          </Box>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CreatingProductScreen;
{
  /* <InputStoreC
                title={"Nombre del producto"}
                placeholder={"Escribe aqui"}
              />
              <InputStoreC title={"Descripción"} placeholder={"Escribe algo"} />
              <InputStoreC title={"Precio"} placeholder={"Escribe algo"} />

              <InputStoreC title={"Picker"} />
              <Container>
                <Button>Añadir Fotos</Button>
              </Container>
            </VStack>

            <Center marginTop={4}>
              <Button
                paddingY={4}
                paddingX={10}
                borderRadius={50}
                marginBottom={4}
                fontWeight={"bold"}
              >
                Guardar Cambios
              </Button>
            </Center> */
}
