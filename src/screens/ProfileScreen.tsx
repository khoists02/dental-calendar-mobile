import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/operations/login.operation";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen</Text>

      <Button
        title="Logout"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </View>
  );
};

export default ProfileScreen;
