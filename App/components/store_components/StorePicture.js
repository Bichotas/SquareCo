import {
  Avatar,
  NativeBaseProvider,
  Text,
  Pressable,
  AddIcon,
  Icon,
  Button,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect, useContext } from "react";

import { ProfileContext } from "../../auth/context";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

// Cosas de firebase

import { getDownloadURL, uploadBytes, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
function StorePicture({ imageUri, onChangeImage }) {
  const profileContext = useContext(ProfileContext);
  const { uid } = profileContext.profile;

  useEffect(() => {
    requestPermission();
  }, []);
  // Funciones para agarrar la imageno quitarala
  const handlePress = () => {
    if (imageUri) {
      Alert.alert("Borrar", "¿Estás seguro que quieres borrar esta imagen?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    } else {
      selectImage();
    }
  };

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        uploadImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  // Funcion para subir imagen al firebase storage

  async function uploadImage(uri) {
    // Checar si guardar con el id de la cuenta o el id de la tienda
    // Por el momento con el id de la tienda
    const imageRef = ref(storage, `stores/profilePicture/${uid}`);
    const response = await fetch(uri);
    const blob = await response.blob();
    if (uri == null) {
      return null;
    } else {
      uploadBytes(imageRef, blob).then((snapshot) => {
        snapshot.ref.toString();
        getDownloadURL(imageRef).then((url) => {
          onChangeImage(url);
          console.log("Url get download");
        });
      });
    }
  }
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
            onPress={handlePress}
            borderRadius={20}
            startIcon={
              <Icon
                as={AntDesign}
                name="plus"
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
