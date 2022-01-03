import React, { useState } from "react";
import {
  Center,
  NativeBaseProvider,
  Container,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";

// Componentes
import TitleForm from "../components/forms/TitleForm";
import ButtonC from "../components/ButtonC";
// Diseños
import LoginCirclesD from "../designs/LoginCIrclesD";
import InputFormC from "../components/forms/InputFormC";

// Formik and Yup
import * as Yup from "yup";
import { Formik } from "formik";

import {
  AppFormField,
  ErrorMessage,
  SubmitButton,
  AppForm,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function NewLoginScreen(props) {
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
              <SubmitButton title={"ACCEDER"} />
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
