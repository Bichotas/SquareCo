import React from "react";
import { useFormikContext } from "formik";
import ImageF from "./ImageF";
import ErrorMessage from "./ErrorMessage";
function FormImage({ name }) {
  const { handleChange, errors, touched, values } = useFormikContext();
  return (
    <>
      <ImageF
        imageUri={values[name]}
        onChangeImage={(uri) => handleChange(name[uri])}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImage;
