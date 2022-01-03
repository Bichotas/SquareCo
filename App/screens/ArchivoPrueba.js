import React from "react";
import { NativeBaseProvider } from "native-base";
import AppPicker from "../components/AppPicker";
function ArchivoPrueba(props) {
  return (
    <NativeBaseProvider>
      <AppPicker placeholder={"Categorias"} icon={"apps"} />
    </NativeBaseProvider>
  );
}

export default ArchivoPrueba;
