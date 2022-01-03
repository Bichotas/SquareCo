import React from "react";
import { Center, NativeBaseProvider, Container } from "native-base";

// Componentes
import ScreenC from "../components/ScreenC";
import TitleForm from "../components/TitleForm";
import ButtonC from "../components/ButtonC";
// Diseños
import RegisterCirclesD from "../designs/RegisterCirclesD";
import InputFormC from "../components/InputFormC";
function NewRegisterScreen(props) {
  return (
    <NativeBaseProvider>
      {/* Cosillas */}
      <ScreenC style={{ backgroundColor: "#FA8C47", overflow: "hidden" }}>
        <RegisterCirclesD></RegisterCirclesD>

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
          />
          <InputFormC
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <InputFormC
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />

          {/* Fin del formulario */}
          <Container>
            <ButtonC title="Registrarse" color="white" text="dark" />
          </Container>
        </Center>
        {/* Fin del contenedor */}
      </ScreenC>
      {/* Fin */}
    </NativeBaseProvider>
  );
}

export default NewRegisterScreen;
