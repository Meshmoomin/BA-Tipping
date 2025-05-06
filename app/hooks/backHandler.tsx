import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";

export const useCustomBackHandler = (handler: () => boolean) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return handler(); // Call the custom handler
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [handler])
  );
};
