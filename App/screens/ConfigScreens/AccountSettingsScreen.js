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
import ImageF from "../../components/forms2/ImageF";
// Segmented control
import SegmentedControl from "rn-segmented-control";

// Formik y yup
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../../components/forms2";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
import { AuthContext, ProfileContext } from "../../auth/context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
// Cositas de firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);



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
  console.log(imageUri);

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
            <Form
              initialValues={{
                name: "",
                email: "",
                typeAccount: false,
              }}
              onSubmit={(values) => console.log(values)}
            >
              {/* Fotografia */}
              <ImageF
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
