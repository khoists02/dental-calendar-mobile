import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";
import { SplashProps } from "../routing/props";
import { MainRoutes } from "../routing/routes";
import { Color } from "../theme/color";
import { Button, TextStyle } from "../theme/styles";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Color.screenBackground,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleBox: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentBox: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    height: "10%",
    paddingRight: "3%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

const SplashScreen = ({ navigation }: SplashProps) => {
  const logo = require("../assets/images/logo.png");
  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 3,
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          source={logo}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text
          style={{
            textAlign: "right",
            width: "100%",
            paddingRight: 100,
            color: "#ffffff",
          }}
        >
          Make your smiles
        </Text>
      </View>
      <View style={{ flex: 3, display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(MainRoutes.Login)}
          style={Button.buttonOutline}
        >
          <Text style={{ ...TextStyle.colorPrimary, ...TextStyle.fontH1 }}>
            I have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
