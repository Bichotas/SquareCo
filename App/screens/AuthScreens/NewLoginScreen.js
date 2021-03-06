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

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function NewLoginScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate("Uwu");
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
            onSubmit={(values) => console.log(values)}
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
              {/* <SubmitButton title={"ACCEDER"} /> */}
              <Button onPress={handleNavigation}>Acceder</Button>
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
