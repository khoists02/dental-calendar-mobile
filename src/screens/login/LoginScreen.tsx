import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { LoginProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";
import { Input, Button } from "../../components";
import { Color } from "../../theme/color";
import { useDispatch } from "react-redux";
import { submitLogin } from "../../redux/operations/login.operation";
import { RootState, useReduxSelector } from "../../redux";

const LoginScreen = ({ navigation }: LoginProps) => {
  const logo = require("../../assets/images/logo.png");
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("khoi.kioto@gmail.com");
  const [password, setPassword] = useState<string>("minhkhoi9");
  const { fetchingSession } = useReduxSelector(
    (state: RootState) => state.login
  );

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
            dispatch(
              submitLogin({
                email,
                password,
              })
            );
          }}
          loading={fetchingSession}
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
