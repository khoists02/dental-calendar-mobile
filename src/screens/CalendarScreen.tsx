import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/operations/login.operation";

const CalendarScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CalendarScreen</Text>
    </View>
  );
};

export default CalendarScreen;
