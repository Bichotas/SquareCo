import React from "react";
import { StyleSheet, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Pantallas
import HomeScreen from "./App/screens/HomeScreen";
import NewLoginScreen from "./App/screens/NewLoginScreen";
import NewRegisterScreen from "./App/screens/NewRegisterScreen";
import SettingsScreen from "./App/screens/SettingsScreen";

// Actual

import colors from "./App/config/colors";
import ListingEditScreen from "./App/screens/ListingEditScreen";
import CreatingProductoScreen from "./App/screens/CreatingProductScreen";

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
    <Drawer.Screen name="Carrito" component={NewRegisterScreen} />
    <Drawer.Screen name="Tiendas" component={NewLoginScreen} />
    <Drawer.Screen name="Configuracion" component={SettingsScreen} />
    <Drawer.Screen name="Actual" component={CreatingProductoScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
}
