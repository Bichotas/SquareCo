import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { AuthContext, ProfileContext } from "../auth/context";

import AppNavigator from "./AppNavigator";
function Navigation(props) {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export default Navigation;
