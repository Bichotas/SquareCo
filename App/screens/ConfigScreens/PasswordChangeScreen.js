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
  View,
} from "native-base";
import ReturnArrow from "../../components/ReturnArrow";
import { Form, FormField, SubmitButton } from "../../components/forms2";
//Yup
import { useFormikContext } from "formik";
import * as Yup from 'yup'
// Validation Schema
const validationSchema = Yup.object().shape({
  changePassword: Yup.string().required().min(4).label("Change Password"),
  confirmPassword: Yup.string().required().min(4).label("Confirm Password")
})

function PasswordChangeScreen({ navigation }) {
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <KeyboardAvoidingView>
          <View flex={1} padding={6}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Cambiar contraseña
            </Text>
            <Divider bg={"black"} h={1} marginBottom={6} />

            <Form
              initialValues={{
                changePassword: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Nueva contraseña
              </Text>
              <FormField
                showPassword={true}
                name={"changePassword"}
                placeholder="Nueva contraseña"
                textContentType="password"
                secureTextEntry={true}
                autoCapitalize="none"
              />
              <Text fontWeight={"bold"} fontSize={16} padding={2}>
                Confirmar contraseña
              </Text>
              <FormField
                showPassword={true}
                name={"confirmPassword"}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Confirmar contraseña"
                autoCapitalize="none"
              />
              <SubmitButton bg={"orange.400"} title={"Cambiar contraseña"} />
            </Form>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default PasswordChangeScreen;
