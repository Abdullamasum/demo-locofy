import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Colors = () => {
  return (
    <View style={styles.colors}>
      <View style={styles.colorsbg} />
      <View style={[styles.colorsChild, styles.colorsChildLayout]} />
      <View style={[styles.colorsItem, styles.colorsChildLayout]} />
      <View style={[styles.colorsInner, styles.colorsChildLayout]} />
      <View style={[styles.rectangleView, styles.colorsChildLayout]} />
      <View style={[styles.colorsChild1, styles.colorsChildLayout]} />
      <View style={[styles.colorsChild2, styles.colorsChildLayout]} />
      <View style={[styles.colorsChild3, styles.colorsChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  colorsChildLayout: {
    height: 100,
    width: 115,
    top: 30,
    position: "absolute",
  },
  colorsbg: {
    top: 0,
    left: 0,
    backgroundColor: "#d9d9d9",
    width: 1297,
    position: "absolute",
    height: 167,
  },
  colorsChild: {
    left: 35,
    backgroundColor: Color.colorDarkslategray,
  },
  colorsItem: {
    left: 188,
    backgroundColor: Color.colorSkyblue,
  },
  colorsInner: {
    left: 341,
    backgroundColor: Color.colorWhitesmoke,
  },
  rectangleView: {
    left: 494,
    backgroundColor: "#bdc3c5",
  },
  colorsChild1: {
    left: 647,
    backgroundColor: "#f45d5d",
  },
  colorsChild2: {
    left: 800,
    backgroundColor: "#88898a",
  },
  colorsChild3: {
    left: 953,
    backgroundColor: "#daf3fb",
  },
  colors: {
    flex: 1,
    width: "100%",
    height: 167,
  },
});

export default Colors;
