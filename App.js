import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./App/navigation/AuthNavigator";
import AppNavigator from "./App/navigation/AppNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
