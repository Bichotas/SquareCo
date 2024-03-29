import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Center,
  NativeBaseProvider,
  View,
  Button,
  Text,
  Avatar,
  Icon,
  Container,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ProfileContext, StoreContext } from "../../auth/context";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { Image } from "react-native";
import { doc, updateDoc } from "firebase/firestore";

// Imports Refactor
import { storage } from "../../utils/storage.server";
import { db } from "../../utils/db.server";

// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function StorePicture({ imageUri, onChangeImage, ...otherProps }) {
  const { profile, setProfile } = useContext(ProfileContext);

  const { store, setStore } = useContext(StoreContext);

  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (imageUri) {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
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

  // UploadFunction
  async function uploadImage(uri) {
    const imageRef = ref(
      storage,
      `stores/profilePicture/${profile.storeProfileId}`
    );
    const response = await fetch(uri);
    const blob = await response.blob();
    if (uri == null) {
      return null;
    } else {
      uploadBytes(imageRef, blob).then((snapshot) => {
        console.log("Subiendo");
        snapshot.ref.toString();
        getDownloadURL(imageRef).then((url) => {
          onChangeImage(url);
          updateDoc(doc(db, `stores/${profile.storeProfileId}`), {
            profilePicture: `${url}`,
          }).then((snapshot) => {
            console.log("Escribiendo");
            let newStore = { ...store };
            newStore.profilePicture = `${url}`;
            setStore(newStore);
          });
        });
      });

      // return (await infoImage).toString();
    }
  }
  return (
    <NativeBaseProvider config={config}>
      <Center position={"relative"} bottom={[60, 80, 110]}>
        <View size={[120, 150]} overflow={"hidden"}>
          {!imageUri && (
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={60}
              bg={{
                linearGradient: {
                  colors: ["violet.100", "violet.800"],
                  start: [0, 0],
                  end: [0, 1],
                },
              }}
            />
          )}
          {imageUri && (
            <View flex={1}>
              <Image
                source={{
                  uri: imageUri,
                }}
                style={{ width: "100%", height: "100%", borderRadius: 60 }}
              ></Image>
            </View>
          )}
        </View>
        <Button
          size={"sm"}
          bottom={8}
          left={8}
          borderRadius={50}
          fontWeight={"bold"}
          onPress={handlePress}
          leftIcon={
            <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
          }
        ></Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default StorePicture;
