import { StyleSheet } from "react-native";
import { Color } from "./color";

export const Button = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Color.primary,
    borderColor: Color.primary,
    textAlign: "center",
    color: "#fff",
    padding: 10,
    borderRadius: 3,
  },
  buttonOutline: {
    backgroundColor: "transparent",
  },
});

export const TextStyle = StyleSheet.create({
  white: {
    color: "#ffffff",
  },
  fontH1: {
    fontSize: 20,
  },
  colorPrimary: {
    color: Color.primary,
  },
});
