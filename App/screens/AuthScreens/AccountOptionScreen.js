import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppButton from "../../components/AppButton";

// Componentes
import ScreenC from "../../components/ScreenC";

// Configuraciones
import colors from "../../config/colors";

// Cosaas de firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
// Diseños
import AccountOptionsCircle from "../../designs/AccountOptionsCirclesD";
function AccountOptionScreen({ route, navigation }) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const { name, email, password } = route.params;
  const onBuy = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("Created");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Uwu", { screen: "Home" });
      }
    );

    console.log(name, email, password, "Buy");
    navigation.navigate("Uwu", { screen: "Home" });
  };
  const onSell = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("Created");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Creacion", { screen: "CreatingStore" });
      }
    );
  };
  return (
    <ScreenC style={styles.optionScreen}>
      <AccountOptionsCircle></AccountOptionsCircle>
      {/* Contenedor  */}
      <View style={styles.container}>
        {/* Imagen */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/enredate.png")}
            resizeMode="center"
            style={styles.image}
          ></Image>
        </View>

        {/* Texto */}
        <Text style={styles.text}>¿Qué te gustaría hacer?</Text>

        {/* Botones */}
        <View style={styles.buttonsContainer}>
          <View style={styles.button1}>
            <AppButton title="Comprar" color="naranja" onPress={onBuy} />
          </View>
          <View style={styles.button2}>
            <AppButton
              title="Vender"
              color="white"
              text="dark"
              onPress={onSell}
            />
          </View>
        </View>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  optionScreen: {
    backgroundColor: colors.primary,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "30%",
    padding: 20,
    borderRadius: 30,
    backgroundColor: colors.azul,
    marginBottom: 15,
  },
  image: {
    width: 300,
  },
  text: {
    padding: 10,
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flex: 0.75,
    width: "100%",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button1: {
    width: "60%",
  },
  button2: {
    marginLeft: "40%",
    width: "60%",
  },
});
export default AccountOptionScreen;
