import { View, Text, HStack, VStack, Container, Icon } from "native-base";
import React, { useContext, useEffect } from "react";

/// Componentes
import ImageSquare from "../../components/ImageSquare";
import colors from "../../config/colors";
import { getAuth } from "firebase/auth";

import { ProfileContext, AuthContext } from "../../auth/context";
function UserView(props) {
  const { user } = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  useEffect(() => {
    console.log(user);
  }, []);

  // Se uso de referencia para el useContext el siguiente articulo:
  // https://www.freecodecamp.org/news/react-context-for-beginners/
  return (
    <View bg={colors.primary} h={150}>
      <VStack space={16} marginTop={5} padding={4}>
        <ImageSquare imageUri={user.photoURL}></ImageSquare>
        <Text
          fontSize={[18, 25]}
          fontWeight={"bold"}
          mt={[4, 8]}
          color={"white"}
          noOfLines={1}
        >
          {user.displayName}
        </Text>
      </VStack>
    </View>
  );
}

export default UserView;
