import React from "react";
import { Button } from "react-native-elements";
import { Color } from "../../theme/color";

interface IButtonCops {
  title: string;
  onHandlePress: () => void;
}

const ButtonCops = ({ title, onHandlePress }: IButtonCops) => {
  return (
    <>
      <Button
        containerStyle={{ borderRadius: 10, width: "100%" }}
        buttonStyle={{ borderRadius: 5, backgroundColor: Color.primary }}
        titleStyle={{ color: Color.grey }}
        title={title}
        onPress={onHandlePress}
      />
    </>
  );
};

export default ButtonCops;
