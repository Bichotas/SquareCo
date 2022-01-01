import React from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  Box,
  Divider,
} from "native-base";
import ImageProductC from "../components/feed/ImageProductC";
import FeedListC from "../components/feed/FeedListC";

const valores = [
  { value: 1, name: "UWu" },
  { value: 2, name: "DOs" },
  { value: 3, name: "tres" },
  { value: 4, name: "cuatr" },
  { value: 5, name: "cicio" },
  { value: 6, name: "seis" },
  { value: 7, name: "siete" },
  { value: 8, name: "ochco" },
  { value: 9, name: "nueve" },
];
function FeedHomeScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center flex={1} justifyContent="flex-start" padding={4}>
          <Box
            bg="gray.400"
            _text={{ color: "white", alignSelf: "center" }}
            //   { Poner otro valor que sea menor para adaptar el valor }

            w={"100%"}
            h={[150, 230, 260, 400]}
            rounded={"2xl"}
            justifyContent="flex-end"
            alignItems="center"
          ></Box>
          <Divider py={1} margin={4} />
          <FeedListC list={valores} />
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default FeedHomeScreen;
