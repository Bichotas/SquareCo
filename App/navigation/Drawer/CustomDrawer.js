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

import { ProfileContext } from "../../auth/context";
function CustomDrawer(props) {
  return (
    <NativeBaseProvider>
      <ProfileContext.Consumer>
        {({ profile, setProfile }) => (
          <View flex={1} bg={colors.primary}>
            <UserView />
            <DrawerContentScrollView>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem
              onPress={setProfile("")}
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
      </ProfileContext.Consumer>
    </NativeBaseProvider>
  );
}

export default CustomDrawer;
