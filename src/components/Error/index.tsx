import React, { useCallback, useRef, useEffect } from "react";
import { Text, Animated, TouchableOpacity, View } from "react-native";
import { RootState, useReduxSelector } from "../../redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { ErrorAction } from "../../redux/reducers/error";

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    } as Animated.TimingAnimationConfig).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const ErrorComps = () => {
  const { errors } = useReduxSelector((state: RootState) => state.error);
  const dispatch = useDispatch();
  const getErrorMessage = useCallback(() => {
    if (typeof errors === "string") {
      return errors;
    } else if (errors.length > 0) {
      return errors[0];
    }

    return undefined;
  }, [errors]);

  return (
    <FadeInView
      style={{
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        marginBottom: 10,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        display: getErrorMessage() ? "flex" : "none",
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 5,
          top: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(ErrorAction.clearError());
          }}
        >
          <Ionicons name="close-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#ffffff",
        }}
      >
        {getErrorMessage()}
      </Text>
    </FadeInView>
  );
};

export default ErrorComps;
