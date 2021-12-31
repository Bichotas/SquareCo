import React from "react";
import { NativeBaseProvider } from "native-base";

// Componentes
import HeaderScreenC from "../components/HeaderScreenC";
function ShoppingCartScreen(props) {
  return (
    <NativeBaseProvider>
      <HeaderScreenC title={"Carrito"} />
    </NativeBaseProvider>
  );
}

export default ShoppingCartScreen;
