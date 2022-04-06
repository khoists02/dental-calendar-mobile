import React from "react";
import { View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { UserAction } from "../../redux/reducers/user";
import { LoginProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";

const LoginScreen = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Back"
        onPress={() => navigation.navigate(MainRoutes.Splash)}
      />

      <Button
        title="Login"
        onPress={() => dispatch(UserAction.setLogin(true))}
      />
    </View>
  );
};

export default LoginScreen;
