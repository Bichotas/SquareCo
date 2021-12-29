import React from "react";
import { NativeBaseProvider, Center, Button } from "native-base";

export default function SettingsScreen() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Button
          padding={4}
          _pressed={{
            bg: "yellow.600",
          }}
          borderRadius="2xl"
        >
          Configuracion
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
