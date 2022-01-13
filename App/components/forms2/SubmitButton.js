import React from "react";
import { useFormikContext } from "formik";
import { NativeBaseProvider, Button } from "native-base";
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <NativeBaseProvider>
      <Button
        borderRadius={45}
        px={5}
        margin={10}
        fontWeight={"bold"}
        onPress={handleSubmit}
      >
        {title}
      </Button>
    </NativeBaseProvider>
  );
}

export default SubmitButton;
