import React from "react";
import { Button } from "react-native-elements";
import { Color } from "../../theme/color";

interface IButtonCops {
  title: string;
  onHandlePress: () => void;
  type: "outline" | "border" | "no-border";
  loading?: boolean;
}

const ButtonCops = ({ title, onHandlePress, type, loading }: IButtonCops) => {
  return (
    <>
      <Button
        // disabled={!loading}
        containerStyle={{
          borderWidth: type === "border" ? 0 : 1,
          borderColor: type === "border" ? Color.primary : "#6dd7d7",
        }}
        buttonStyle={{
          borderColor: type === "border" ? Color.primary : "#2cc4c4",
          borderRadius: 5,
          backgroundColor: type === "border" ? Color.primary : "#27c3c2",
        }}
        titleStyle={{ color: "#ffffff", fontSize: 15 }}
        title={title}
        disabledStyle={{ backgroundColor: "#d1d1d1" }}
        onPress={onHandlePress}
      />
    </>
  );
};

export default ButtonCops;
