import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { UserAction } from "../../redux/reducers/user";
import { LoginProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";
import { Input, Button } from "../../components";

const LoginScreen = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("khoi.kioto@gmail.com");
  const [password, setPassword] = useState<string>("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Input
        onChange={(em) => setEmail(em)}
        label="Email"
        placeholder=""
        value={email}
      />

      <Input
        onChange={(val) => setPassword(val)}
        label="Password"
        placeholder=""
        isSecureText={true}
        value={password}
      />

      <Button
        title="Back"
        onHandlePress={() => navigation.navigate(MainRoutes.Splash)}
      />

      <Button
        title="Login"
        onHandlePress={() => {
          if (email === "khoi.kioto@gmail.com" && password === "123123") {
            dispatch(UserAction.setLogin(true));
          }
        }}
      />
    </View>
  );
};

export default LoginScreen;
