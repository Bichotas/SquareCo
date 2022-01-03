import React, { useState } from "react";
import {
  Center,
  NativeBaseProvider,
  Container,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";

// Componentes
import TitleForm from "../components/TitleForm";
import ButtonC from "../components/ButtonC";
// Diseños
import LoginCirclesD from "../designs/LoginCIrclesD";
import InputFormC from "../components/InputFormC";

// Formik and Yup
import * as Yup from "yup";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import AppFormFIeld from "../components/AppFormFIeld";
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
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              handleChange,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <Center padding={4}>
                  <TitleForm title={"ACCESO"} />

                  {/* Formularios */}

                  <AppFormFIeld
                    name={"email"}
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                  />

                  <AppFormFIeld
                    name={"password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                  />
                  {/* Fin del formulario */}
                  <Container>
                    <ButtonC
                      title="ACCEDER"
                      color="white"
                      text="dark"
                      onPress={handleSubmit}
                    />
                  </Container>
                </Center>
              </>
            )}
          </Formik>
          {/* Fin del contenedor */}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewLoginScreen;
