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

// Custom Drawer
import CustomDrawer from "./Drawer/CustomDrawer";

// Stacks
import MyConfigStack from "./ConfigNavigator";
import MyHomeStack from "./HomeNavigator";
import MyCartStack from "./ShippingCartNavigator";
import MyCategStack from "./CategoriesNavigator";

import { Entypo, AntDesign } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      drawerActiveTintColor: colors.white,
      drawerInactiveTintColor: colors.white,
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
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={MyHomeStack}
      options={{
        drawerIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Carrito"
      component={MyCartStack}
      options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign name="shoppingcart" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name="Tiendas"
      component={MyCategStack}
      options={{
        drawerIcon: ({ color, size }) => (
          <Entypo name="shop" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name="Configuracion"
      component={MyConfigStack}
      options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign name="setting" color={color} size={size} />
        ),
      }}
    />
    {/* <Drawer.Screen name="Actual" component={CreatingStoreScreen} /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
