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

                <InputFormC
                  placeholder="Nombre"
                  icon="account-circle-outline"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={() => setFieldTouched("name")}
                  onChangeText={handleChange("name")}
                />

                <ErrorMessage error={errors.name} visible={touched.name} />
                <InputFormC
                  placeholder="Email"
                  icon="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <InputFormC
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  onBlur={() => setFieldTouched("password")}
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                />
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
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
