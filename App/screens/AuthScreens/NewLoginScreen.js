import React, { useState } from "react";
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

// Formik and Yup
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from "../../components/forms";

// Cosas de firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function NewLoginScreen({ navigation }) {
  const context = useContext(contextValue);
  const handleNavigation = () => {
    navigation.navigate("Uwu");
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In");
        const user = userCredential.user;
        console.log(user);
        handleNavigation();
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
