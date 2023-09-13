import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const HomeIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.homeIcon, style]}
      contentFit="cover"
      source={require("../assets/home-icon1.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
});

export default HomeIcon1;
