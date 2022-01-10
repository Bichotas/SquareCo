import { View, Text, HStack, VStack, Container, Icon } from "native-base";
import React, { useContext } from "react";
import AuthContext from "../../auth/context";

/// Componentes
import ProfilePSquare from "../../components/ProfilePSquare";
import colors from "../../config/colors";
function UserView(props) {
  const { displayName } = useContext(AuthContext);
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
            {displayName}
          </Text>
        </Container>
      </VStack>
    </View>
  );
}

export default UserView;
