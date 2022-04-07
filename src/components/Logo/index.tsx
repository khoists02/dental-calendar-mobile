import React from "react";

import { View, Image } from "react-native";

const Logo = () => {
  const logo = require("../../assets/images/logo.png");
  return (
    <View
      style={{
        width: 180,
        height: 180,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginBottom: 100,
      }}
    >
      <Image source={logo} style={{ width: "100%" }} />
    </View>
  );
};

export default Logo;
