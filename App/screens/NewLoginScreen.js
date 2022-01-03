import React, { useState } from "react";
import { Center, NativeBaseProvider, Container, Button } from "native-base";

// Componentes
import ScreenC from "../components/ScreenC";
import TitleForm from "../components/TitleForm";
import ButtonC from "../components/ButtonC";
// Diseños
import LoginCirclesD from "../designs/LoginCIrclesD";
import InputFormC from "../components/InputFormC";

// Formik
import { Formik } from "formik";

function NewLoginScreen(props) {
  return (
    <NativeBaseProvider>
      {/* Cosillas */}
      <ScreenC style={{ backgroundColor: "#71D7F1", overflow: "hidden" }}>
        <LoginCirclesD></LoginCirclesD>

        {/* Contenedor */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit, handleChange }) => (
            <>
              <Center padding={4}>
                <TitleForm title={"ACCESO"} />

                {/* Formularios */}
                <Container margin={30} />

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
                {/* <Container>
                  <ButtonC
                    title="ACCEDER"
                    color="white"
                    text="dark"
                    onPress={handleSubmit}
                  />
                </Container> */}

                <Button onPress={handleSubmit}>ACCEDER</Button>
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

export default NewLoginScreen;
