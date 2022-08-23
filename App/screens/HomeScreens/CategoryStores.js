import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function CategoryStores({ route }) {
  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <View>
      <Text>{route.params.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
