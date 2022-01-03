import React from "react";
import { Center, NativeBaseProvider, Container } from "native-base";
import { Formik } from "formik";
// Componentes
import ScreenC from "../components/ScreenC";
import TitleForm from "../components/TitleForm";
import ButtonC from "../components/ButtonC";
import InputFormC from "../components/InputFormC";
// Diseños
import RegisterCirclesD from "../designs/RegisterCirclesD";
function NewRegisterScreen(props) {
  return (
    <NativeBaseProvider>
      {/* Cosillas */}
      <ScreenC style={{ backgroundColor: "#FA8C47", overflow: "hidden" }}>
        <RegisterCirclesD></RegisterCirclesD>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              {/* Contenedor */}
              <Center padding={4}>
                <TitleForm title={"REGISTRO"} />

                {/* Formularios */}
                <Container margin={30} />
                <InputFormC
                  placeholder="Nombre"
                  icon="account-circle-outline"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange("name")}
                />
                <InputFormC
                  placeholder="Email"
                  icon="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={handleChange("email")}
                />
                <InputFormC
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
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
      </ScreenC>
      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewRegisterScreen;
