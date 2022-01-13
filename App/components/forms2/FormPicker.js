import React from "react";
import { NativeBaseProvider } from "native-base";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

import { AppFormPicker } from "../forms";
function FormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      {/* Hacer el picker igual que el de abajo*/}
      <AppFormPicker />
    </>
  );
}

export default FormPicker;
