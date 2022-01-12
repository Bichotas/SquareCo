import { View, Text, HStack, VStack, Container, Icon } from "native-base";
import React, { useContext } from "react";


/// Componentes
import ProfilePSquare from "../../components/ProfilePSquare";
import colors from "../../config/colors";
import { getAuth } from "firebase/auth";

import { ProfileContext, AuthContext } from "../../auth/context";
function UserView(props) {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  return (
    <AuthContext.Consumer>
      {({ user, setUser }) => (
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
                {user.uid}
              </Text>
            </Container>
          </VStack>
        </View>
      )}
    </AuthContext.Consumer>
  );
}

export default UserView;
