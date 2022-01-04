import React from "react";
import {
  Center,
  NativeBaseProvider,
  Container,
  KeyboardAvoidingView,
  ScrollView,
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function NewRegisterScreen(props) {
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
          onSubmit={(values) => console.log(values)}
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
          </Center>
        </AppForm>
        {/* Fin del contenedor */}
      </KeyboardAvoidingView>
      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewRegisterScreen;
