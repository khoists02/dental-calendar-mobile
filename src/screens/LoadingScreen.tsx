import React from "react";
import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import { Color } from "../theme/color";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Color.screenBackground,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const LoadingScreen = () => {
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
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
