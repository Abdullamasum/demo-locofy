import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ProfileCard = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={styles.frameLayout} />
      <View style={[styles.frame2, styles.frameLayout]} />
      <View style={[styles.frame2, styles.frameLayout]} />
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={styles.background} />
        <Text style={styles.myProfile} numberOfLines={1}>
          My Profile
        </Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/avatar_img1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    overflow: "hidden",
    height: 260,
    width: 393,
  },
  frame2: {
    marginTop: -260,
  },
  background: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSkyblue,
    height: 210,
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
  },
  myProfile: {
    top: 69,
    left: 140,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 114,
    height: 25,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 117,
    left: 119,
    width: 147,
    height: 143,
    position: "absolute",
  },
  frame: {
    alignItems: "center",
    left: 0,
    top: 0,
    overflow: "hidden",
    height: 260,
    position: "absolute",
  },
});

export default ProfileCard;
