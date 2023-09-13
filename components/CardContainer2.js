import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CardContainer2 = () => {
  return (
    <Pressable style={styles.card}>
      <View style={[styles.frame, styles.frameIconPosition]}>
        <View style={[styles.email, styles.frameLayout1]}>
          <View style={styles.emailChild} />
        </View>
      </View>
      <View style={styles.frame1}>
        <Text style={[styles.michaelWang, styles.hTypo]} numberOfLines={1}>
          Michael Wang
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameIconPosition]}>
        <Text style={[styles.availableDays, styles.hTypo]}>Available days</Text>
      </View>
      <View style={[styles.frame3, styles.frameIconPosition]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/avat_tut1.png")}
        />
      </View>
      <View style={[styles.frame4, styles.framePosition]}>
        <View style={[styles.all, styles.allFlexBox]}>
          <View style={[styles.allChild, styles.allBorder]} />
          <Text style={[styles.english, styles.frenchTypo]}>English</Text>
        </View>
      </View>
      <View style={[styles.frame5, styles.framePosition]}>
        <View style={[styles.all1, styles.allFlexBox]}>
          <View style={[styles.allItem, styles.allBorder]} />
          <Text style={[styles.french, styles.frenchTypo]}>French</Text>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout]}>
        <Image
          style={styles.unitedStates2Icon}
          contentFit="cover"
          source={require("../assets/unitedstates-2.png")}
        />
      </View>
      <View style={[styles.frame7, styles.frameLayout]}>
        <Image
          style={styles.unitedStates2Icon}
          contentFit="cover"
          source={require("../assets/france-2.png")}
        />
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <View style={[styles.frame8, styles.frameIconPosition]}>
        <Text style={[styles.h, styles.hTypo]} numberOfLines={1}>
          20€/h
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout1: {
    width: 337,
    alignItems: "center",
  },
  hTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  framePosition: {
    height: 126,
    top: 10,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  allFlexBox: {
    alignItems: "flex-end",
    height: 31,
    justifyContent: "flex-end",
  },
  allBorder: {
    borderWidth: 1.5,
    borderColor: Color.colorSkyblue,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    height: 31,
    borderRadius: Border.br_6xs,
  },
  frenchTypo: {
    marginTop: -25,
    color: Color.colorWhite,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  frameLayout: {
    height: 36,
    top: 100,
    width: 18,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  emailChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_6xs,
    height: 131,
    width: 337,
  },
  email: {
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
  },
  frame: {
    top: 0,
    left: 0,
    height: 136,
    alignItems: "center",
    width: 337,
  },
  michaelWang: {
    height: 19,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: 124,
  },
  frame1: {
    top: 73,
    height: 63,
    width: 124,
    left: 19,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  availableDays: {
    fontSize: FontSize.size_xs,
    height: 14,
    width: 84,
  },
  frame2: {
    top: 61,
    left: 234,
    height: 75,
    width: 84,
    alignItems: "center",
  },
  maskGroupIcon: {
    height: 66,
    width: 58,
  },
  frame3: {
    top: 7,
    height: 129,
    width: 58,
    left: 19,
    alignItems: "center",
  },
  allChild: {
    width: 69,
  },
  english: {
    width: 63,
  },
  all: {
    justifyContent: "flex-end",
    width: 69,
  },
  frame4: {
    left: 173,
    width: 69,
  },
  allItem: {
    width: 66,
  },
  french: {
    width: 60,
  },
  all1: {
    width: 66,
    justifyContent: "flex-end",
  },
  frame5: {
    left: 252,
    width: 66,
  },
  unitedStates2Icon: {
    width: 18,
    height: 18,
  },
  frame6: {
    left: 19,
  },
  frame7: {
    left: 46,
    justifyContent: "flex-end",
  },
  frameIcon: {
    top: 56,
    left: 208,
    height: 80,
    width: 18,
  },
  frameIcon1: {
    top: 102,
    left: 214,
    width: 108,
    height: 34,
  },
  h: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.8,
    height: 21,
    width: 60,
  },
  frame8: {
    top: 15,
    left: 96,
    height: 121,
    width: 60,
    alignItems: "center",
  },
  card: {
    top: 203,
    left: 28,
    height: 131,
    position: "absolute",
    width: 337,
  },
});

export default CardContainer2;
