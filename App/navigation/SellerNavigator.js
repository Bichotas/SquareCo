import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import {
  CreatingStore,
  PostProduct,
  ProfileStore,
  EditProduct,
  ProductDetail,
} from "../screens/SellerScreen";

const SellerStack = createNativeStackNavigator();
const MySellerStack = () => {
  return (
    <SellerStack.Navigator screenOptions={{ headerShown: false }}>
      <SellerStack.Screen name="ProfileStore" component={ProfileStore} />
      <SellerStack.Screen
        name="CreatingProduct"
        component={PostProduct}
        options={{ presentation: "card" }}
      />
      <SellerStack.Screen name="EditProduct" component={EditProduct} />
      <SellerStack.Screen name="CreatingStore" component={CreatingStore} />
      <SellerStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: true }}
      />
    </SellerStack.Navigator>
  );
};

export default MySellerStack;
