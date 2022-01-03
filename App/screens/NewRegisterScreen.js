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
import ScreenC from "../components/ScreenC";
import TitleForm from "../components/TitleForm";
import ButtonC from "../components/ButtonC";
import InputFormC from "../components/InputFormC";
import * as Yup from "yup";
// Diseños
import RegisterCirclesD from "../designs/RegisterCirclesD";
import ErrorMessage from "../components/ErrorMessage";
import AppFormFIeld from "../components/AppFormFIeld";

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

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              {/* Contenedor */}
              <Center padding={4}>
                <TitleForm title={"REGISTRO"} />

                {/* Formularios */}
                <AppFormFIeld
                  name={"name"}
                  placeholder="Nombre"
                  icon="account-circle-outline"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
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
                    title="Registrarse"
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
      </KeyboardAvoidingView>
      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewRegisterScreen;
