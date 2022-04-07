import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../components";
import { RegisterProps } from "../../routing/props";

const RegisterScreen = ({ navigation }: RegisterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>RegisterScreen</Text>
      <Button
        title="Back"
        type="outline"
        onHandlePress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RegisterScreen;
