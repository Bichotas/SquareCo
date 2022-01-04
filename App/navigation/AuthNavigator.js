import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  RecoverPassword,
  OptionAccount,
} from "../screens/AuthScreens";
// navigationTheme

const AuthStack = createNativeStackNavigator();

const MyAuthStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="ChoseAccount" component={OptionAccount} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="RecoverPassword" component={RecoverPassword} />
    </AuthStack.Navigator>
  );
};
export default MyAuthStack;
