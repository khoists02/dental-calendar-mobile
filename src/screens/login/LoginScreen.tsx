import React, { useEffect, useState } from "react";
import { View, KeyboardAvoidingView, SafeAreaView, Text } from "react-native";
import { LoginProps } from "../../routing/props";
import { MainRoutes } from "../../routing/routes";
import { Input, Button, Logo, Error } from "../../components";
import { Color } from "../../theme/color";
import { useDispatch } from "react-redux";
import { submitLogin } from "../../redux/operations/login.operation";
import { LoginAction } from "../../redux/reducers/login";
import { storageDeleteItem, storageGetItem } from "../../utils/storage";
import { ErrorAction } from "../../redux/reducers/error";

const LoginScreen = ({ navigation, route }: LoginProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string | undefined>();
  const [hidden, setHidden] = useState<boolean>(false);
  const [password, setPassword] = useState<string>();
  useEffect(() => {
    const getStorageEmail = async () => {
      const eml = await storageGetItem("email");
      if (eml) {
        setEmail(eml);
      }
    };

    const getStorageUsername = async () => {
      const usrName = await storageGetItem("name");
      if (usrName) {
        setName(usrName);
      }
    };
    getStorageUsername();
    getStorageEmail();

    return () => {
      dispatch(ErrorAction.clearError());
    };
  }, []);

  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params?.email);
      setHidden(true);
      setPassword("");
    } else {
      setEmail("");
      setHidden(false);
    }

    return () => {
      dispatch(LoginAction.clearRegisterState());
    };
  }, [dispatch, route]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.screenBackground }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Error />
        <Logo />
        <View style={{ flex: 1, width: "100%" }}>
          {name && (
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                paddingLeft: 10,
                marginBottom: 10,
              }}
            >
              Welcome back {name}
            </Text>
          )}
          {hidden && (
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                paddingLeft: 10,
                marginBottom: 10,
              }}
            >
              Welcome to {email}
            </Text>
          )}
          {!hidden && !name && (
            <Input
              onChange={(em) => setEmail(em)}
              label="Email"
              placeholder=""
              value={email}
              required
            />
          )}

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
            type={"border"}
          />
          <Button
            title="Register"
            type="outline"
            onHandlePress={() => navigation.navigate(MainRoutes.Register)}
          />

          {name && (
            <Button
              title="Switch Account"
              type="outline"
              onHandlePress={() => {
                storageDeleteItem("email");
                storageDeleteItem("name");
                setName(undefined);
                setEmail("");
                setHidden(false);
              }}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
