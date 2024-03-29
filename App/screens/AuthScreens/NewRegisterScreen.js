import React, { useContext } from "react";
import {
  Center,
  NativeBaseProvider,
  Container,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "native-base";
import { Formik } from "formik";
// Componentes
import ScreenC from "../../components/ScreenC";
import TitleForm from "../../components/forms/TitleForm";
import SubmitButton from "../../components/forms/SubmitButton";
import * as Yup from "yup";
import ReturnArrow from "../../components/ReturnArrow";
// Diseños
import RegisterCirclesD from "../../designs/RegisterCirclesD";
import ErrorMessage from "../../components/forms/ErrorMessage";
import { AppFormField } from "../../components/forms";
import AppForm from "../../components/forms/AppForm";

// Cosaas de firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext, ProfileContext } from "../../auth/context";

import {
  doc,
  getFirestore,
  setDoc,
  collection,
  getDoc,
} from "firebase/firestore";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

// Refactorizando imports
import { db } from "../../utils/db.server";
import { auth } from "../../utils/auth.client";

// Validation Shcema
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function NewRegisterScreen({ navigation, route }) {
  // Navegacion

  const { tipoCuenta } = route.params;
  const profileContext = useContext(ProfileContext);

  async function handleRegister({ name, email, password }, typeAccount) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    // Actualizamos el perfil del usuario

    await updateProfile(infoUsuario.user, { displayName: name });
    // Parte donde se guarda la coleccion
    const docuRef = doc(db, `users/${infoUsuario.user.uid}`);
    await setDoc(docuRef, {
      uid: infoUsuario.user.uid,
      typeAccount: typeAccount,
      storeProfileId: null,
    });

    const docSnap = await getDoc(docuRef);
    profileContext.setProfile({ ...docSnap.data() });
    // Parte donde se redirije a la siguiente
  }
  return (
    <NativeBaseProvider>
      {/* Cosillas */}
      <KeyboardAvoidingView
        width={"100%"}
        height={"100%"}
        backgroundColor={"#FA8C47"}
      >
        <RegisterCirclesD></RegisterCirclesD>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => {
            handleRegister(values, tipoCuenta);
          }}
          validationSchema={validationSchema}
        >
          {/* Contenedor */}
          <Center padding={4}>
            <TitleForm title={"REGISTRO"} />

            {/* Formularios */}
            <AppFormField
              name={"name"}
              placeholder="Nombre"
              icon="account-circle-outline"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              name={"email"}
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name={"password"}
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
            />

            {/* Fin del formulario */}

            <SubmitButton title={"Registrarse"} />
            {/* <Button onPress={handleNavigation}>Registrarse</Button> */}
          </Center>
        </AppForm>
        {/* Fin del contenedor */}
      </KeyboardAvoidingView>
      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewRegisterScreen;
