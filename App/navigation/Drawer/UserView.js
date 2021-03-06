import { View, Text, HStack, VStack, Container, Icon } from "native-base";
import React from "react";

/// Componentes
import ProfilePSquare from "../../components/ProfilePSquare";
import colors from "../../config/colors";
function UserView(props) {
  return (
    <View bg={colors.primary} h={150}>
      <VStack>
        <Container margin={5} width={"70%"} marginTop={9}>
          <ProfilePSquare></ProfilePSquare>
          <Text
            fontSize={[18, 25]}
            fontWeight={"bold"}
            mt={[4, 8]}
            color={"white"}
            noOfLines={1}
          >
            [Nombre]
          </Text>
        </Container>
      </VStack>
    </View>
  );
}

export default UserView;
