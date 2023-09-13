import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ArrowDownBoldOutline = () => {
  return (
    <View style={styles.arrowDownBoldOutline}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "75%",
    width: "83.33%",
    top: "12.5%",
    right: "8.33%",
    bottom: "12.5%",
    left: "8.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowDownBoldOutline: {
    flex: 1,
    width: "100%",
    height: 24,
    overflow: "hidden",
  },
});

export default ArrowDownBoldOutline;
