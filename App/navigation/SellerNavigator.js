import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import {
  CreatingStore,
  PostProduct,
  ProfileStore,
  EditProduct,
} from "../screens/SellerScreen";

const SellerStack = createNativeStackNavigator();

const MySellerStack = () => {
  return (
    <SellerStack.Navigator screenOptions={{ headerShown: false }}>
      <SellerStack.Screen name="CreatingStore" component={CreatingStore} />
      <SellerStack.Screen name="CreatingProduct" component={PostProduct} />
      <SellerStack.Screen name="ProfileStore" component={ProfileStore} />
      <SellerStack.Screen name="EditProduct" component={EditProduct} />
    </SellerStack.Navigator>
  );
};
export default MySellerStack;
