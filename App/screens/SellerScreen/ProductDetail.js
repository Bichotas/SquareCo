import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function ProductDetail({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: route.params.item.title });
  }, []);
  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
