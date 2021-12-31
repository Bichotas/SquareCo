import React from "react";
import { Box, VStack, Text, HStack } from "native-base";
function DetailsShippingCart(props) {
  return (
    <Box paddingX={4}>
      <VStack padding={3}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={20} fontWeight={"bold"}>
            Total:
          </Text>
          <Text>[TOTAL]</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={15}>Cantidad:</Text>
          <Text>[Cantidad]</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default DetailsShippingCart;
