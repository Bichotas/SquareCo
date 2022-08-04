import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { AuthContext, ProfileContext, StoreContext } from "../auth/context";
import { View, ActivityIndicator } from "react-native";
import AppNavigator from "./Drawer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/auth.client";
import * as SecureStore from "expo-secure-store";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/db.server";

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
  const { store, setStore } = useContext(StoreContext);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        // Si esta autenticado el usuario se va a setear en el contexto el usuario y va a ser persistente
        if (authenticatedUser) {
          const docRef = doc(db, `users/${authenticatedUser.uid}`);
          const docSnapshot = (await getDoc(docRef)).data();
          // Si se detecta que el tipo de cuenta del usuario es vendedor y la propiedad de la tienda
          // tiene un id entonces vamos a mandar a llamar al documento y setearlo en el contexto
          if (store === "") {
            if (
              docSnapshot.typeAccount === "vendedor" &&
              docSnapshot.storeProfileId !== ""
            ) {
              let storeData = (
                await getDoc(doc(db, "stores", docSnapshot.storeProfileId))
              ).data();
              setStore({ ...storeData });
            }
          } else {
            console.log("Store already set");
          }
          if (profile === "") {
            setUser(authenticatedUser);
            setProfile({ ...docSnapshot });
          } else {
            console.log("Profile already set");
          }

          // Podriamos hacer que si el tipo de cuenta del usuario es vendedor, se busque la tienda del usuario
          // y se setee en el contexto la tienda
        } else {
          setUser(null);
          setProfile("");
        }
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
