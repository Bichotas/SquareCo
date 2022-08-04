import React, { useEffect, useState } from "react";
import AuthContext from "./App/auth/context";

import Navigation from "./App/navigation/Navigation";

export default function App() {
  useEffect(() => {
    console.log(
      "-----------------------------Inicia la aplicación------------------------------"
    );
  }, []);
  return <Navigation />;
}
