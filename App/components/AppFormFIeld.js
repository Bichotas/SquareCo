import React from "react";
import InputFormC from "./InputFormC";
import ErrorMessage from "./ErrorMessage";

// Formik Context
import { useFormikContext } from "formik";
function AppFormFIeld({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <InputFormC
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormFIeld;
