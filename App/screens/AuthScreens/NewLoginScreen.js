import React, { useContext, useState } from "react";
import {
  Center,
  NativeBaseProvider,
  Container,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "native-base";

// Componentes
import TitleForm from "../../components/forms/TitleForm";
import ReturnArrow from "../../components/ReturnArrow";
// Diseños
import LoginCirclesD from "../../designs/LoginCIrclesD";

import * as SecureStore from "expo-secure-store";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

// Formik and Yup
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from "../../components/forms";

// Cosas de firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext, ProfileContext } from "../../auth/context";
import { doc, getDoc } from "firebase/firestore";

// Refactorizacion
import { auth } from "../../utils/auth.client";
import { db } from "../../utils/db.server";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function NewLoginScreen({ navigation }) {
  const profileContext = useContext(ProfileContext);

  async function handleSignIn({ email, password }) {
    const infoUsuario = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docRef = doc(db, `users/${infoUsuario.user.uid}`);
    const docSnap = await getDoc(docRef);

    profileContext.setProfile({ ...docSnap.data() });
  }

  // const user = auth.currentUser;
  // console.log(user);
  return (
    <NativeBaseProvider>
      {/* Cosillas */}

      <KeyboardAvoidingView
        width={"100%"}
        height={"100%"}
        backgroundColor={"#71D7F1"}
      >
        <ScrollView>
          <LoginCirclesD></LoginCirclesD>

          {/* Contenedor */}
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleSignIn(values)}
            validationSchema={validationSchema}
          >
            <Center padding={4}>
              <TitleForm title={"ACCESO"} />

              {/* Formularios */}

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
              <SubmitButton title={"ACCEDER"} />
              {/* <Button onPress={handleNavigation}>Acceder</Button> */}
            </Center>
          </AppForm>
          {/* Fin del contenedor */}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewLoginScreen;
