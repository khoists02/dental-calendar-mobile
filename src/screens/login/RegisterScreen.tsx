import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { Button, HeaderBack, Input } from "../../components";
import { RootState, useReduxSelector } from "../../redux";
import { register } from "../../redux/operations/login.operation";
import { RegisterProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";
import { Color } from "../../theme/color";
import { IUserRegister } from "../../types/user";
import LoadingScreen from "../LoadingScreen";

const RegisterScreen = ({ navigation }: RegisterProps) => {
  const dispatch = useDispatch();
  const { loading, registerActon } = useReduxSelector(
    (state: RootState) => state.login
  );
  const [user, setUser] = useState<IUserRegister>({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (registerActon === "back") {
      navigation.navigate(MainRoutes.Login, {
        email: user.email,
      });
    }
  }, [registerActon]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.screenBackground }}>
      {loading && <LoadingScreen />}
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.screenBackground,
          display: "flex",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <HeaderBack onBack={() => navigation.goBack()} />

        {/* <Logo /> */}
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <Input
            onChange={(em) => setUser({ ...user, email: em })}
            label="Email"
            placeholder=""
            value={user.email}
            required
          />

          <Input
            onChange={(name) => setUser({ ...user, name: name })}
            label="Name"
            placeholder=""
            value={user.name}
            required
          />

          <Input
            onChange={(password) => setUser({ ...user, password })}
            label="Password"
            isSecureText
            placeholder=""
            value={user.password}
            required
          />

          <Input
            isSecureText
            onChange={(confirmPassword) =>
              setUser({ ...user, confirmPassword })
            }
            label="Confirm password"
            placeholder=""
            value={user.confirmPassword}
            required
          />
          <Button
            title="Register"
            type="border"
            onHandlePress={() => {
              dispatch(register(user));
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
