import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <ActivityIndicator
      color={"#fff"}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#333",
        opacity: 0.3,
        zIndex: 9999,
      }}
    />
  );
};

export default LoadingScreen;
