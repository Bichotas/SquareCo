import React from "react";
import { StyleSheet, Text, Image, Pressable } from "react-native";

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
import SettingsScreen from "../screens/ConfigScreens/SettingsScreen";


// Stacks
import MyConfigStack from "./ConfigNavigator";
import MyHomeStack from "./HomeNavigator";
import MyCartStack from "./ShippingCartNavigator";
import MyCategStack from "./CategoriesNavigator";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,

      headerTitleAlign: "center",
      headerTitle: () => (
        <Pressable>
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
        </Pressable>
      ),
    }}
  >
    <Drawer.Screen name="Home" component={MyHomeStack} />
    <Drawer.Screen name="Carrito" component={MyCartStack} />
    <Drawer.Screen name="Tiendas" component={MyCategStack} />
    <Drawer.Screen name="Configuracion" component={MyConfigStack} />
    {/* <Drawer.Screen name="Actual" component={CreatingStoreScreen} /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
