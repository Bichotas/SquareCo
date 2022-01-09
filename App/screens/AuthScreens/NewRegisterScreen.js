import React from "react";
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function NewRegisterScreen({ navigation }) {
  // Navegacion
  const handleNavigation = (params) => {
    navigation.navigate("ChoseAccount", params);
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Funcion para autenticar
  // const handleRegister = ({ name, email, password }) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log("Created");
  //       const user = userCredential.user;
  //       handleNavigation("ChoseAccount");
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleRegister = (values) => {
    handleNavigation(values);
  };
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
          onSubmit={(values) => handleRegister(values)}
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
