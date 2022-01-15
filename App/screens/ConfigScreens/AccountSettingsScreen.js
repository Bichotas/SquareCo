import React, { useState, useContext } from "react";

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
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// Cositas de firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
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
  // States
  const [imageUri, setImageUri] = useState();
  const [tabIndex, setTabIndex] = React.useState(check(typeAccount));
  const [theme, setTheme] = React.useState("LIGHT");

  // Contexts
  const profileContext = useContext(ProfileContext);

  // Variables de objetos
  const { name, email, typeAccount, uid, urlProfile } = profileContext.profile;

  // Objetos
  const valoresContext = { name, email, typeAccount, uid, urlProfile };
  // Referencias
  // En el segundo valor hay que definir como lo va a representar, ya que cualquier cambio de foto va a ser un cambio
  const docuRef = doc(firestore, `users/${uid}`);

  // En vez de llamar al documento, nos basamos en los valores del objeto del contexto
  // const result = await getDoc(docuRef);

  // UploadFunction
  async function uploadImage(uri) {
    const imageRef = ref(storage, `users/${uid}`);
    const response = await fetch(uri);
    const blob = await response.blob();

    uploadBytes(imageRef, blob).then((snapshot) => {
      console.log("Uploaded a blob or file");
    });
  }

  // ChecktypeAccount
  function check(typeAccount) {
    if (typeAccount == "comprador") {
      return 0;
    } else {
      return 1;
    }
  }
  // Arrow navigation
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  // submitForm - Funcion
  const handleValues = (values) => {
    console.log(values, imageUri, tabIndex);
  };
  // Funciones del segmented control
  const toggleTheme = () =>
    theme === "LIGHT" ? setTheme("DARK") : setTheme("LIGHT");
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  // Funcion handleSaveChanges
  const handleSaveChanges = (valuesFormik, contexValues) => {
    const typeAccountForm = () => {
      if (tabIndex == 0) {
        return "comprador";
      } else {
        return "vendedor";
      }
    };
    const form = {
      name: valuesFormik.name,
      email: valuesFormik.email,
      typeAccount: typeAccountForm(),
      urlProfile: imageUri,
    };
    console.log(form.typeAccount, form.urlProfile);
    if (
      form.name === contexValues.name &&
      form.email === contexValues.email &&
      form.typeAccount === contexValues.typeAccount &&
      form.urlProfile == contexValues.urlProfile
    ) {
      console.log("Not change int the image");
    } else {
      console.log("Cambio en el aimagen");
    }
  };
  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <ProfileContext.Consumer>
          {({ profile, setProfile }) => (
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
                    name: profile.name,
                    email: profile.email,
                  }}
                  onSubmit={(values) =>
                    handleSaveChanges(values, valoresContext)
                  }
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
                    value={profile.name}
                    name={"name"}
                    placeholder="Nombre de la cuenta"
                    autoCapitalize="none"
                  />
                  <Text fontWeight={"bold"} fontSize={16} padding={2}>
                    Correo Electronico
                  </Text>

                  <FormField
                    value={profile.email}
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
          )}
          {/* Keyboard Avoiding View */}
        </ProfileContext.Consumer>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default AccountSettingsScreen;
