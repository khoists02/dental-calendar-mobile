import React, { useMemo } from "react";
import { Button, Text } from "react-native-elements";
import { Color } from "../../theme/color";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IButtonCops {
  title: string;
  onHandlePress: () => void;
  type: "outline" | "border" | "no-border";
  loading?: boolean;
  disabled?: boolean;
}

const ButtonCops = ({
  title,
  onHandlePress,
  type,
  loading = false,
  disabled = false,
}: IButtonCops) => {
  const getTitle: JSX.Element = useMemo(() => {
    return (
      <>
        <Text
          style={{
            color: "#ffffff",
            marginRight: loading ? 5 : 0,
            fontSize: 16,
          }}
        >
          {title}
        </Text>
        {loading && (
          <>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={15}
              color={"#ffffff"}
            />
          </>
        )}
      </>
    );
  }, [loading, title]);
  return (
    <>
      <Button
        disabled={disabled || loading}
        containerStyle={{
          borderWidth: type === "border" ? 0 : 1,
          borderColor: type === "border" ? Color.primary : "#6dd7d7",
        }}
        buttonStyle={{
          borderColor: type === "border" ? Color.primary : "#2cc4c4",
          borderRadius: 5,
          backgroundColor: type === "border" ? Color.primary : "#27c3c2",
          paddingTop: 10,
          paddingBottom: 10,
        }}
        titleStyle={{ color: "#ffffff", fontSize: 18, fontWeight: "600" }}
        title={getTitle}
        disabledStyle={{ backgroundColor: "#d1d1d1" }}
        onPress={onHandlePress}
      />
    </>
  );
};

export default ButtonCops;
