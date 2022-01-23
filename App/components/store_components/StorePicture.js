import {
  Avatar,
  NativeBaseProvider,
  Text,
  Pressable,
  AddIcon,
  Icon,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

function StorePicture({ imageUri, onChangeImage }) {
  return (
    <NativeBaseProvider>
      <Avatar
        borderColor={"purple.600"}
        size={[100, 145, 195, 245]}
        position={"relative"}
        borderWidth={7}
        bottom={[50, 70, 100]}
        source={{ uri: imageUri }}
      >
        <Avatar.Badge size={100} justifyContent={"center"}>
          <Button
            padding={4}
            right={3}
            borderRadius={20}
            startIcon={
              <Icon
                as={Ionicons}
                name="cloud-upload-outline"
                size={"4"}
                justifyContent={"center"}
                right={2}
              />
            }
          ></Button>
        </Avatar.Badge>
      </Avatar>
    </NativeBaseProvider>
  );
}

export default StorePicture;
