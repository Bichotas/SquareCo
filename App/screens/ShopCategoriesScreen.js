import React from "react";
import { NativeBaseProvider } from "native-base";
import SquareStoreC from "../components/SquareStoreC";

function ShopCategoriesScreen(props) {
  return (
    <NativeBaseProvider>
      <SquareStoreC name={"Tienda Pete"} />
    </NativeBaseProvider>
  );
}

export default ShopCategoriesScreen;
