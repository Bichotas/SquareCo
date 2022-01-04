import React from "react";
import { StyleSheet, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Pantallas
import HomeScreen from "../screens/HomeScreen";
import NewLoginScreen from "../screens/NewLoginScreen";
import NewRegisterScreen from "../screens/NewRegisterScreen";
import SettingsScreen from "../screens/SettingsScreen";

import colors from "../config/colors";
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
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Carrito" component={NewRegisterScreen} />
    <Drawer.Screen name="Tiendas" component={NewLoginScreen} />
    <Drawer.Screen name="Configuracion" component={SettingsScreen} />
    <Drawer.Screen name="Actual" component={CreatingStoreScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
