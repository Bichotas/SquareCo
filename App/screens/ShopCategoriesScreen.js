import React from "react";
import { NativeBaseProvider } from "native-base";

const categories = [
  {
    backgroundColor: "#33AAFF",
    icon: "floor-lamp",
    label: "Servicios",
    value: 1,
  },
  {
    backgroundColor: "#FA8C47",
    icon: "car",
    label: "Comida",
    value: 2,
  },
  {
    backgroundColor: "#8EEE6D",
    icon: "camera",
    label: "Postres",
    value: 3,
  },
  {
    backgroundColor: "#FF6A6A",
    icon: "cards",
    label: "Ropa",
    value: 4,
  },
  {
    backgroundColor: "#6315B0",
    icon: "shoe-heel",
    label: "Zapatos",
    value: 5,
  },
  {
    backgroundColor: "#2E606B",
    icon: "basketball",
    label: "Accesorios",
    value: 6,
  },
  {
    backgroundColor: "#2E606B",
    icon: "headphones",
    label: "Accesorios",
    value: 7,
  },
  {
    backgroundColor: "#EF79C7",
    icon: "book-open-variant",
    label: "Belleza",
    value: 8,
  },
  {
    backgroundColor: "#919191",
    icon: "application",
    label: "Otros",
    value: 9,
  },
];

function ShopCategoriesScreen(props) {
  return <NativeBaseProvider></NativeBaseProvider>;
}

export default ShopCategoriesScreen;
