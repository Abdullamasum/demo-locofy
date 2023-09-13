import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CardContainer = () => {
  return (
    <View style={styles.card}>
      <View style={styles.email}>
        <View style={styles.emailChild} />
      </View>
      <View style={[styles.frame, styles.frameIconPosition]}>
        <Text
          style={[styles.samKerr, styles.hTypo]}
          numberOfLines={1}
        >{`Sam Kerr `}</Text>
      </View>
      <View style={[styles.frame1, styles.frameIconPosition]}>
        <Text style={[styles.availableDays, styles.hTypo]}>Available days</Text>
      </View>
      <View style={[styles.frame2, styles.frameIconPosition]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/avat_tut2.png")}
        />
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={[styles.all, styles.allFlexBox]}>
          <View style={[styles.allChild, styles.allBorder]} />
          <Text style={[styles.python, styles.javaTypo]}>Python</Text>
        </View>
      </View>
      <View style={[styles.frame4, styles.framePosition]}>
        <View style={[styles.all1, styles.allFlexBox]}>
          <View style={[styles.allItem, styles.allBorder]} />
          <Text style={[styles.java, styles.javaTypo]}>Java</Text>
        </View>
      </View>
      <View style={styles.frame5}>
        <Image
          style={styles.unitedStates2Icon}
          contentFit="cover"
          source={require("../assets/unitedstates-2.png")}
        />
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={[styles.frame6, styles.frameIconPosition]}>
        <Text style={[styles.h, styles.hTypo]} numberOfLines={1}>
          18€/h
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  hTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  framePosition: {
    height: 121,
    top: 10,
    overflow: "hidden",
    alignItems: "center",
    position: "absolute",
  },
  allFlexBox: {
    justifyContent: "flex-end",
    height: 31,
    alignItems: "center",
  },
  allBorder: {
    borderWidth: 1.5,
    borderColor: Color.colorSkyblue,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    height: 31,
    borderRadius: Border.br_6xs,
  },
  javaTypo: {
    marginTop: -25,
    color: Color.colorWhite,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  emailChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_6xs,
    height: 131,
    width: 337,
  },
  email: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 337,
    position: "absolute",
  },
  samKerr: {
    height: 19,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: 124,
  },
  frame: {
    top: 73,
    height: 58,
    width: 124,
    overflow: "hidden",
    left: 19,
    alignItems: "center",
  },
  availableDays: {
    fontSize: FontSize.size_xs,
    height: 14,
    width: 84,
  },
  frame1: {
    top: 61,
    left: 234,
    height: 70,
    width: 84,
    alignItems: "center",
  },
  maskGroupIcon: {
    height: 59,
    width: 58,
  },
  frame2: {
    top: 7,
    height: 124,
    width: 58,
    left: 19,
    overflow: "hidden",
    alignItems: "center",
  },
  allChild: {
    width: 69,
  },
  python: {
    width: 57,
  },
  all: {
    width: 69,
  },
  frame3: {
    left: 191,
    width: 69,
  },
  allItem: {
    width: 47,
  },
  java: {
    width: 37,
  },
  all1: {
    width: 47,
  },
  frame4: {
    left: 271,
    width: 47,
  },
  unitedStates2Icon: {
    width: 18,
    height: 18,
  },
  frame5: {
    top: 100,
    width: 18,
    height: 31,
    overflow: "hidden",
    left: 19,
    alignItems: "center",
    position: "absolute",
  },
  frameIcon: {
    top: 103,
    left: 237,
    width: 85,
    height: 28,
  },
  frameIcon1: {
    top: 56,
    left: 208,
    height: 75,
    width: 18,
  },
  h: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.8,
    height: 21,
    width: 60,
  },
  frame6: {
    top: 15,
    left: 96,
    height: 116,
    width: 60,
    alignItems: "center",
  },
  card: {
    top: 364,
    left: 28,
    height: 131,
    width: 337,
    position: "absolute",
  },
});

export default CardContainer;
