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
  Select,
  VStack,
  CheckIcon,
} from "native-base";
import ImageProductC from "../../components/feed/ImageProductC";
import FeedListC from "../../components/feed/FeedListC";
import { ProfileContext } from "../../auth/context";
import CreatingStoreScreen from "../../screens/SellerScreen/CreatingStoreScreen";
import { Form, FormField } from "../../components/forms2";
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
  let [service, setService] = React.useState("");
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
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              size={"xl"}
            >
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header fontWeight={"bold"} fontSize={20}>
                  <Text fontWeight={"bold"} fontSize={20}>
                    Crea tu tienda
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Form
                    initialValues={{
                      nameStore: "",
                      description: "",
                      category: "",
                    }}
                  >
                    <Text>Nombre de la tienda</Text>
                    <FormField
                      name={"nameStore"}
                      placeholder={"Nombre de la tienda"}
                    />
                    <Text>Descripción</Text>
                    <FormField
                      name={"description"}
                      placeholder={"Descripción"}
                    />
                    <Text>Categoría</Text>
                    <VStack alignItems="center" space={4}>
                      <Select
                        selectedValue={service}
                        width={"100%"}
                        variant="filled"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Service"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setService(itemValue)}
                      >
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </VStack>
                  </Form>
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
