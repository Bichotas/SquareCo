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
import ReturnArrow from "../../components/ReturnArrow";
function ShippingDataScreen({ navigation }) {
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <KeyboardAvoidingView>
          <Box flex={1} padding={6}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Datos de envio
            </Text>
            <Divider bg={"black"} h={1} />

            {/* Checar la documentacion de como estan los formularios
        Se cambio su forma original, antes en vez de un Text Habia un Form.Label */}
            <Form
              initialValues={{
                streetName: "",
                postalCode: "",
                phoneNumber: "",
              }}
            >
              <VStack space={2} mt="0">
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Nombre de la calle
                </Text>
                <FormField name={"streetName"} />
                <HStack space={5}>
                  <VStack>
                    <Text fontWeight={"bold"} fontSize={16} padding={2}>
                      Nombre de la cuenta
                    </Text>
                    <FormField name={"postalCode"} />
                  </VStack>
                  <VStack>
                    <Text fontWeight={"bold"} fontSize={16} padding={2}>
                      Número telefonico
                    </Text>
                    <FormField name={"phoneNumber"} />
                  </VStack>
                </HStack>
              </VStack>
            </Form>
            {/* En vez de un switch - Se debe de usar un Segment Component o un Tab View */}
          </Box>
          <Center>
            <Button
              paddingY={4}
              paddingX={10}
              borderRadius={50}
              marginBottom={4}
              fontWeight={"bold"}
            >
              Guardar Cambios
            </Button>
          </Center>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ShippingDataScreen;
