import { NativeBaseProvider, View } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Drawer things
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import UserView from "./UserView";
import colors from "../../config/colors";
import { signOut, getAuth } from "firebase/auth";
import { ProfileContext, AuthContext } from "../../auth/context";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Quitar las cosas del onPress y de ahi resetear todo en el contexto y el signOut, pasar luego al Stack de autenticacion
function CustomDrawer(props) {
  return (
    <NativeBaseProvider>
      <AuthContext.Consumer>
        {({ user, setUser }) => (
          <View flex={1} bg={colors.primary}>
            <UserView />
            <DrawerContentScrollView>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem
              onPress={() => {
                console.log(user);
                signOut(auth);
                setUser(null);
              }}
              key={"LogOut"}
              inactiveTintColor="white"
              label={"Logout"}
              icon={({ size, color }) => (
                <MaterialCommunityIcons
                  name="logout"
                  size={size}
                  color={color}
                />
              )}
            />
          </View>
        )}
      </AuthContext.Consumer>
    </NativeBaseProvider>
  );
}

export default CustomDrawer;
