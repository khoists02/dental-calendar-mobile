import React from "react";
import { Input } from "react-native-elements";
import { Color } from "../../theme/color";

interface IInputForm {
  label: string;
  placeholder: string;
  value: string;
  errorMessage?: string | undefined;
  onChange: (value: string) => void;
  isSecureText?: boolean;
}

const InputForm = (props: IInputForm) => {
  const {
    label,
    value,
    placeholder = "Placeholder",
    errorMessage,
    onChange,
    isSecureText,
  } = props;
  return (
    <>
      <Input
        secureTextEntry={isSecureText}
        label={label}
        onChangeText={(val) => {
          onChange(val);
        }}
        placeholder={placeholder}
        autoCompleteType={false}
        value={value}
        errorMessage={errorMessage}
        inputStyle={{ color: Color.grey }}
        inputContainerStyle={{
          borderColor: Color.primary,
          borderWidth: 1,
          borderRadius: 3,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        labelStyle={{ color: Color.primary, marginBottom: 4 }}
        placeholderTextColor={Color.grey}
      />
    </>
  );
};

export default InputForm;
