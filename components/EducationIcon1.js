import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const EducationIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.educationIcon, style]}
      contentFit="cover"
      source={require("../assets/education-icon1.png")}
    />
  );
};

const styles = StyleSheet.create({
  educationIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
});

export default EducationIcon1;
