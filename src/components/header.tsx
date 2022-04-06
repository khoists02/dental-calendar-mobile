import React from "react";
import {StyleSheet, View, Text} from "react-native";

interface CompProps {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#669999",
  },
  titleText: {
    color: "#ffffff",
    fontSize: 30,
  },
});

const Header = ({title}: CompProps) => {
  const {container, titleText} = styles;
  return (
    <View style={container}>
      <Text style={titleText}> {title} </Text>
    </View>
  );
};

export default Header;
