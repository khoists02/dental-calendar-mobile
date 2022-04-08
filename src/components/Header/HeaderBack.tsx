import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IHeaderBack {
  onBack: () => void;
}

const HeaderBack = ({ onBack }: IHeaderBack) => {
  return (
    <View
      style={{
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity onPress={() => onBack()}>
        <Ionicons name="return-down-back-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;
