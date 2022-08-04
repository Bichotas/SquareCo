import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { AuthContext, ProfileContext, StoreContext } from "../auth/context";
import { View, ActivityIndicator } from "react-native";
import AppNavigator from "./Drawer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/auth.client";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState("");
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState("");
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

function RootNavigator() {
  // Destructuración de contextos
  const { user, setUser } = useContext(AuthContext);
  const { profile, setProfile } = useContext(ProfileContext);
  let [isLoading, setIsLoading] = useState(true);

  // useEffect

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser
          ? setUser(authenticatedUser)
          : () => {
              setUser(null);
              setProfile("");
            };
        setIsLoading(false);
      }
    );

    return unsubscribeAuth;
  }, [user]);
  useLayoutEffect(() => {
    setIsLoading(true);
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default function Navigation() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <StoreProvider>
          <RootNavigator />
        </StoreProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}
