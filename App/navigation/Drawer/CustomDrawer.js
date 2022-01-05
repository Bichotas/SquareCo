import { NativeBaseProvider, View } from "native-base";
import React from "react";
// Drawer things
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import UserView from "./UserView";
import colors from "../../config/colors";
function CustomDrawer(props) {
  return (
    <NativeBaseProvider>
      <View flex={1} bg={colors.primary}>
        <UserView />
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </NativeBaseProvider>
  );
}

export default CustomDrawer;
