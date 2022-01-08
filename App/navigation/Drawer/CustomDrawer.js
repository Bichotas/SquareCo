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
import { Colors } from "react-native/Libraries/NewAppScreen";
function CustomDrawer(props) {
  return (
    <NativeBaseProvider>
      <View flex={1} bg={colors.primary}>
        <UserView />
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <DrawerItem
          inactiveTintColor="white"
          label={"Logout"}
          icon={({ size, color }) => (
            <MaterialCommunityIcons name="logout" size={size} color={color} />
          )}
        />
      </View>
    </NativeBaseProvider>
  );
}

export default CustomDrawer;
