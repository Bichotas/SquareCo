import React, { useContext, useState } from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  Box,
  Divider,
  Modal,
  Text,
  Button,
} from "native-base";
import ImageProductC from "../../components/feed/ImageProductC";
import FeedListC from "../../components/feed/FeedListC";
import { ProfileContext } from "../../auth/context";
import CreatingStoreScreen from "../../screens/SellerScreen/CreatingStoreScreen";
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
function FeedHomeScreen({ navigation }) {
  const { profile } = useContext(ProfileContext);
  const [button, setbutton] = useState(true);
  const [showModal, setShowModal] = useState(true);
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
          {/* Mensaje para ir a crear la tienda si es que no se ha creado */}

          {profile.storeProfile == null && profile.typeAccount == "vendedor" && (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header fontWeight={"bold"} fontSize={20}>
                  <Text fontWeight={"bold"} fontSize={20}>
                    Crea tu tienda
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Text fontSize={18}>Hola!</Text>
                  <Text fontSize={18}>
                    El ultimo paso es crear tu tienda, ¿Quiéres crear tu cuenta
                    ahora?
                  </Text>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      No
                    </Button>
                    <Button
                      onPress={() => {
                        navigation.navigate("CreatingStore");
                      }}
                    >
                      Si
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          )}
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default FeedHomeScreen;
