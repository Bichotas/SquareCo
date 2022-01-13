import React from "react";
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
} from "native-base";
import ReturnArrow from "../../components/ReturnArrow";
import TextInput from "../../components/forms2/TextInput";


// Formik y yup
import * as Yup from 'yup'
// Faltaria poner la flecha de regreso, pero eso cuando se hagan todos los stacksS

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
  name: Yup.string().required().email().label("Email ")
})

function AccountSettingsScreen({ navigation }) {
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
      <NativeBaseProvider>
        <ScrollView>
          <Box size={50} bg={"purple.100"}>asdf</Box>
        </ScrollView>
      </NativeBaseProvider>
  );
}

export default AccountSettingsScreen;
