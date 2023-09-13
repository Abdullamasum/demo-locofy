import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ChevronRight = () => {
  return (
    <View style={styles.chevronRight}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "50%",
    width: "30.88%",
    top: "25%",
    right: "33.33%",
    bottom: "25%",
    left: "35.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  chevronRight: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default ChevronRight;
