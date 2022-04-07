import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import { LoginProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";
import { Input, Button, Logo } from "../../components";
import { Color } from "../../theme/color";
import { useDispatch } from "react-redux";
import { submitLogin } from "../../redux/operations/login.operation";
import { RootState, useReduxSelector } from "../../redux";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
      }}
    >
      <Logo />
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
          disabled={email === "" || password === ""}
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
