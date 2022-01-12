import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { ProfileContext, AuthContext } from "../auth/context";

import AppNavigator from "./AppNavigator";
function Navigation(props) {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Navigation;
