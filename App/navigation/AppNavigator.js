import React from "react";
import { StyleSheet, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Pantallas
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  RecoverPassword,
  LoadingScreen,
} from "../screens/AuthScreens";
import colors from "../config/colors";
import SettingsScreen from "../screens/SettingsScreen";
import CreatingStoreScreen from "../screens/CreatingStoreScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,

      headerTitleAlign: "center",
      headerTitle: () => (
        <Image
          style={{
            width: 48,
            height: 48,
            borderColor: colors.white,
            borderWidth: 2,
            borderRadius: 8,
          }}
          source={require("../assets/logo-squareco.jpeg")}
        />
      ),
    }}
  >
    <Drawer.Screen name="Home" component={WelcomeScreen} />
    <Drawer.Screen name="Carrito" component={RegisterScreen} />
    <Drawer.Screen name="Tiendas" component={LoginScreen} />
    <Drawer.Screen name="Configuracion" component={SettingsScreen} />
    <Drawer.Screen name="Actual" component={CreatingStoreScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
