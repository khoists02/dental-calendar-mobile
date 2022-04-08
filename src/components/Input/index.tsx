import React, { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import { Color } from "../../theme/color";

interface IInputForm {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isSecureText?: boolean;
  disabled?: boolean;
  required?: boolean;
}

const InputForm = (props: IInputForm) => {
  const {
    label,
    value,
    placeholder,
    onChange,
    isSecureText,
    required,
    disabled,
  } = props;
  const inputRef = useRef();
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("show");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (keyboardStatus && required && !value) {
      if (keyboardStatus === "hidden") {
        setError(`The ${label} is required.`);
      } else if (keyboardStatus === "show") {
        setError(undefined);
      }
    }
  }, [required, keyboardStatus, value]);

  return (
    <>
      <Input
        disabled={disabled}
        ref={inputRef}
        secureTextEntry={isSecureText}
        label={label}
        onChangeText={(val) => {
          onChange(val);
        }}
        autoCapitalize="none"
        placeholder={placeholder}
        autoCompleteType={false}
        errorStyle={{ marginBottom: 10, fontSize: 14 }}
        value={value}
        onSubmitEditing={Keyboard.dismiss}
        errorMessage={error}
        inputStyle={{ color: "#ffffff", fontSize: 15, flex: 1 }}
        clearButtonMode="always"
        inputContainerStyle={{
          borderColor: "#6dd7d7",
          borderWidth: 1,
          borderRadius: 3,
          paddingLeft: 10,
          paddingRight: 10,
          width: "100%",
        }}
        labelStyle={{
          color: Color.primary,
          marginBottom: 4,
          fontWeight: "500",
        }}
        placeholderTextColor="#ffffff"
      />
    </>
  );
};

export default InputForm;
