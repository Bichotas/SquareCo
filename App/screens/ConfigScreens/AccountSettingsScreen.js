import {
  Text,
  NativeBaseProvider,
  Divider,
  Center,
  ScrollView,
  Badge,
  KeyboardAvoidingView,
  View,
  HStack,
  Button,
  VStack,
} from "native-base";
import React from "react";
// COMPONENTES
import ReturnArrow from "../../components/ReturnArrow";
import ImageF from "../../components/forms2/ImageF";
import { Form, FormField, SubmitButton } from "../../components/forms2";

// Cosillas
import { auth } from "../../utils/auth.client";
// CONTEXTO
import { AuthContext, ProfileContext } from "../../auth/context";
import { signOut, updateEmail, updateProfile } from "firebase/auth";
export default function AccountSettingsScreen() {
  const { user } = React.useContext(AuthContext);
  const { profile } = React.useContext(ProfileContext);

  // Estados para el formulario -------------------------------------------------
  const [imageUri, setimageUri] = React.useState(user.photoURL);

  // Hacer una funcion la cual actualice los valores del usuario según como crea el usuario

  async function handleChange(values, auhtObject) {
    let profileUpdate = { displayName: values.name, photoURL: imageUri };

    if (values.email !== user.email) {
      console.log("Se va a cambiar el correo");
      updateEmail(auhtObject, values.email);
      signOut(auhtObject);
    }

    // Se tiene que actualizar el tipo de cuenta desde el documento
    // Actualizar el correo se tiene que usar updateEmail() y después salirse de la cuenta

    await updateProfile(auhtObject.currentUser, {
      displayName: values.name,
    });
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
        <ReturnArrow />

        <KeyboardAvoidingView>
          <View flex={1} padding={6} marginTop={-10}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Cuenta
            </Text>
            <Divider bg={"black"} h={1} marginBottom={6} />
            <Form
              initialValues={{
                name: profile.name,
                email: profile.email,
              }}
              onSubmit={(values) => handleChange(values, auth)}
            >
              {/* Fotografia */}
              <ImageF
                imageUri={imageUri}
                onChangeImage={(uri) => setimageUri(uri)}
              />
              {/* Fin-Fotografia */}
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Nombre de la cuenta
              </Text>
              <FormField
                value={user.displayName}
                name={"name"}
                placeholder="Nombre de la cuenta"
                autoCapitalize="none"
              />
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Correo Electronico
              </Text>

              <FormField
                value={user.email}
                name={"email"}
                placeholder="Correo Electronico"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Tipo de cuenta
              </Text>
              <HStack space={2}>
                <Badge
                  justifyContent={"center"}
                  marginLeft={2}
                  width={"25%"}
                  borderRadius={10}
                  padding={2}
                >
                  Vendedor
                </Badge>
                <VStack>
                  <Text>¿Quierés cambiar el tipo de cuenta?</Text>
                  <Center>
                    <Button width={"50%"}>Cambiar</Button>
                  </Center>
                </VStack>
              </HStack>
              <SubmitButton title={"Guardar cambios"} />
            </Form>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}
