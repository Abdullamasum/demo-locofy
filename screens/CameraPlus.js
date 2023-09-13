import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const CameraPlus = () => {
  return (
    <View style={styles.cameraPlus}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "87.5%",
    width: "95.83%",
    top: "4.17%",
    right: "4.17%",
    bottom: "8.33%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  cameraPlus: {
    flex: 1,
    width: "100%",
    height: 24,
    overflow: "hidden",
  },
});

export default CameraPlus;
