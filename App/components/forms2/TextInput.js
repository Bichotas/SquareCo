import React, { useState } from "react";
import { NativeBaseProvider, Input, Button } from "native-base";
function TextInput({ value, showPassword, placeholder, ...otherProps }) {
  // Poner un icono si es que se necesita
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <NativeBaseProvider>
      {/* {showPassword && (
        <Input
          // Diseñito
          value={value}
          variant={"filled"}
          borderRadius={15}
          padding={4}
          fontSize={16}
          placeholder={placeholder}
          type={show ? "text" : "password"}
          w={{
            base: "100%",
            md: "45%",
          }}
          InputRightElement={
            showPassword && (
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                onPress={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            )
          }
        />
      )} */}

      <Input
        width={"100%"}
        value={value}
        variant={"filled"}
        borderRadius={15}
        padding={4}
        fontSize={16}
        placeholder={placeholder}
        {...otherProps}
      />
    </NativeBaseProvider>
  );
}

export default TextInput;

// <Input
//   InputRightElement={
//     <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
//       {show ? "Hide" : "Show"}
//     </Button>
//   }
//   defaultValue={value}
//   width={"100%"}
//   borderWidth={3}
//   variant={"filled"}
//   placeholder={placeholder}
//   borderRadius={15}
//   padding={4}
//   fontSize={16}
//   {...otherProps}
// />;

// <Input
//   // Diseñito
//   value={value}
//   variant={"filled"}
//   borderRadius={15}
//   padding={4}
//   fontSize={16}
//   placeholder={placeholder}
//   type={show && showPassword ? "text" : "password"}
//   w={{
//     base: "100%",
//     md: "45%",
//   }}
//   InputRightElement={
//     showPassword && (
//       <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
//         {show ? "Hide" : "Show"}
//       </Button>
//     )
//   }
// />;
