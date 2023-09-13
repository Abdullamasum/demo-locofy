import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Bell2 = () => {
  return (
    <View style={styles.bell}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "87.5%",
    width: "75%",
    top: "8.33%",
    right: "12.5%",
    bottom: "4.17%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  bell: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Bell2;
