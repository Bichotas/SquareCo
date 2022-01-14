import React, { useState } from "react";

import {
  Box,
  Text,
  NativeBaseProvider,
  Divider,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Link,
  Input,
  Button,
  HStack,
  Switch,
  KeyboardAvoidingView,
  View,
} from "native-base";
import ReturnArrow from "../../components/ReturnArrow";
import TextInput from "../../components/forms2/TextInput";

// Segmented control
import SegmentedControl from "rn-segmented-control";

// Formik y yup
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../../components/forms2";
import ImageProfile from "../../components/forms2/ImageProfile";

// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

// Cosas de formik
const validationSchema = Yup.object().shape({
  url: Yup.string().required().url().label("Image"),
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email "),
  typeAccount: Yup.boolean().required(),
});

function AccountSettingsScreen({ navigation }) {
  const [imageUri, setImageUri] = useState();
  const [tabIndex, setTabIndex] = React.useState(1);
  const [theme, setTheme] = React.useState("LIGHT");
  const toggleTheme = () =>
    theme === "LIGHT" ? setTheme("DARK") : setTheme("LIGHT");
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />

        {/* Keyboard Avoiding View */}
        <KeyboardAvoidingView>
          <View flex={1} padding={6} marginTop={-10}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Cuenta
            </Text>
            <Divider bg={"black"} h={1} marginBottom={5} />

            {/* Formulario con los componentes de la carpeta forms2 */}
            <Form>
              {/* Fotografia */}
              {/* Investigar como poner uno para la url de la fotografia */}

              {/*  Se comento esta parte ya que se va hacer un componente y otro para formik */}
              {/* <Center>
                <Box
                  size={[120, 150]}
                  bg={{
                    linearGradient: {
                      colors: ["violet.100", "violet.800"],
                      start: [0, 0],
                      end: [0, 1],
                    },
                  }}
                  borderRadius={20}
                ></Box>

                <Button borderRadius={50} px={7} margin={5} fontWeight={"bold"}>
                  Cambiar foto
                </Button>
              </Center>

               */}
              <ImageProfile
                imageUri={imageUri}
                onChangeImage={(uri) => setImageUri(uri)}
              />
              {/* Fin-Fotografia */}
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Nombre de la cuenta
              </Text>
              <FormField
                name={"name"}
                placeholder="Nombre de la cuenta"
                autoCapitalize="none"
              />
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Correo Electronico
              </Text>

              <FormField
                name={"email"}
                placeholder="Correo Electronico"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Tipo de cuenta
              </Text>
              <Center>
                <SegmentedControl
                  tabs={["Comprador", "Vendedor"]}
                  onChange={() => {}}
                  paddingVertical={6}
                  containerStyle={{
                    marginVertical: 10,
                  }}
                  currentIndex={tabIndex}
                  onChange={handleTabsChange}
                  theme={theme}
                />
              </Center>
              <SubmitButton title={"Guardar cambios"} />
            </Form>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default AccountSettingsScreen;
