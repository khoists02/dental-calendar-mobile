import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { UserAction } from "../redux/reducers/user";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen</Text>

      <Button
        title="Logout"
        onPress={() => dispatch(UserAction.setLogin(false))}
      />
    </View>
  );
};

export default ProfileScreen;
