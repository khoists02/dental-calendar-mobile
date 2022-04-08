import React from "react";
import { View, Text } from "react-native";
import { RootState, useReduxSelector } from "../redux";

const HomeScreen = () => {
  const { user } = useReduxSelector((state: RootState) => state.login);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
      <Text>Welcome {user.name}</Text>
    </View>
  );
};

export default HomeScreen;
