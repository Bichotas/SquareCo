import React from "react";
import { StyleSheet, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Pantallas
import HomeScreen from "./App/screens/HomeScreen";
import LoginScreen from "../SquareCo/App/screens/LoginScreen";
import RegisterScreen from "./App/screens/RegisterScreen";
import SettingsScreen from "./App/screens/SettingsScreen";

import colors from "./App/config/colors";
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
          source={require("./App/assets/logo-squareco.jpeg")}
        />
      ),
    }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Carrito" component={RegisterScreen} />
    <Drawer.Screen name="Tiendas" component={LoginScreen} />
    <Drawer.Screen name="Configuracion" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
}
