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
import React, { useEffect } from "react";
// COMPONENTES
import ReturnArrow from "../../components/ReturnArrow";
import ImageF from "../../components/forms2/ImageF";
import { Form, FormField, SubmitButton } from "../../components/forms2";

// Cosillas
import { auth } from "../../utils/auth.client";
// CONTEXTO
import { AuthContext, ProfileContext } from "../../auth/context";
import { signOut, updateEmail, updateProfile } from "firebase/auth";
import { updateDoc } from "firebase/firestore";
import { Firebase } from "../../utils/firebaseConfig";
import { Alert, Modal } from "react-native";
export default function AccountSettingsScreen({ navigation }) {
  const { user } = React.useContext(AuthContext);
  const { profile } = React.useContext(ProfileContext);

  // Estados para el formulario -------------------------------------------------
  const [imageUri, setimageUri] = React.useState(user.photoURL);
  const [typeAccountS, setTypeAccountS] = React.useState(profile.typeAccount);
  // Hacer una funcion la cual actualice los valores del usuario según como crea el usuario

  async function handleChange(values, auhtObject) {
    let valor = 0;
    const updateProps = {
      displayName: values.name,
      photoURL: imageUri,
    };

    if (typeAccountS !== profile.typeAccount) {
      // Se actualiza el documento de firestores
      updateDoc(doc(Firebase, `users/${user.uid}`), {
        uid: user.uid,
        typeAccount: typeAccountS,
      });
      console.log("Se debe de salir tipos de cuentas diferentes");
      // signOut(auhtObject);
    }
    // Actualizamos el perfil del usuario y después se muestra una alerta
    await updateProfile(auhtObject.currentUser, updateProps).then(() => {
      Alert.alert("Se actualizo correctamente");
    });
  }
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />

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
                Tipo de cuenta
              </Text>
              <HStack space={2}>
                <Badge
                  justifyContent={"center"}
                  marginLeft={2}
                  width={"25%"}
                  borderRadius={10}
                  padding={2}
                  colorScheme={
                    typeAccountS == "vendedor" ? "danger" : "success"
                  }
                >
                  {typeAccountS}
                </Badge>
                <VStack>
                  <Text>¿Quierés cambiar el tipo de cuenta?</Text>
                  <Center>
                    <Button
                      width={"50%"}
                      onPress={() => {
                        if (typeAccountS === "vendedor") {
                          setTypeAccountS("comprador");
                        } else if (typeAccountS === "comprador") {
                          setTypeAccountS("vendedor");
                        }
                      }}
                    >
                      Cambiar
                    </Button>
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
