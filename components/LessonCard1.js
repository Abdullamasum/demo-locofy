import * as React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Image } from "expo-image";
import Carousel from "react-native-reanimated-carousel";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const LessonCard1 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameLayout]} />
      <View style={[styles.frame2, styles.frameLayout]} />
      <View style={[styles.frame2, styles.frameLayout]} />
      <View style={[styles.frame2, styles.frameLayout]}>
        <Image
          style={styles.cancelCircleSvgrepoCom1Icon}
          contentFit="cover"
          source={require("../assets/cancelcirclesvgrepocom-1.png")}
        />
        <View style={styles.cardPosition}>
          <View style={[styles.email, styles.cardPosition]} />
          <View style={styles.frame5}>
            <Text style={styles.python}>Python</Text>
          </View>
          <View style={[styles.frame6, styles.framePosition]}>
            <Text style={[styles.text, styles.textTypo]}>12.10.2023</Text>
          </View>
          <View style={[styles.frame7, styles.framePosition]}>
            <Text style={[styles.text1, styles.textTypo]}>16:00 - 17:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 75,
    width: 201,
    overflow: "hidden",
  },
  cardPosition: {
    left: 0,
    top: 0,
    height: 75,
    width: 201,
    position: "absolute",
  },
  framePosition: {
    left: 90,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    height: 14,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frame1: {
    overflow: "hidden",
  },
  frame2: {
    marginTop: -75,
    overflow: "hidden",
  },
  cancelCircleSvgrepoCom1Icon: {
    top: 8,
    left: 175,
    width: 18,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  email: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  python: {
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: 57,
  },
  frame5: {
    top: 26,
    left: 15,
    height: 49,
    width: 57,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    width: 99,
  },
  frame6: {
    top: 21,
    height: 54,
    width: 99,
  },
  text1: {
    width: 82,
  },
  frame7: {
    top: 40,
    height: 35,
    width: 82,
  },
  frame: {
    top: 644,
    left: 30,
    alignItems: "center",
    overflow: "hidden",
    height: 75,
    width: 201,
    position: "absolute",
  },
});

export default LessonCard1;
