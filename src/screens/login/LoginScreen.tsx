import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { UserAction } from "../../redux/reducers/user";
import { LoginProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";
import { Input, Button } from "../../components";
import { Color } from "../../theme/color";

const LoginScreen = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const logo = require("../../assets/images/logo.png");

  const [email, setEmail] = useState<string>("khoi.kioto@gmail.com");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: Color.screenBackground,
        display: "flex",
      }}
    >
      <Image source={logo} style={{ flex: 1 }} />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <Input
          onChange={(em) => setEmail(em)}
          label="Email"
          placeholder=""
          value={email}
          required
        />

        <Input
          onChange={(val) => setPassword(val)}
          label="Password"
          placeholder=""
          required
          isSecureText
          value={password}
        />
        <Button
          title="Login"
          onHandlePress={() => {
            if (email === "khoi.kioto@gmail.com" && password === "123123") {
              dispatch(UserAction.setLogin(true));
            }
          }}
          type={"border"}
        />
        <Button
          title="Register"
          type="outline"
          onHandlePress={() => navigation.navigate(MainRoutes.Register)}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
