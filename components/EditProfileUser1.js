import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfileUser1 = () => {
  return (
    <View style={styles.editProfileUser1}>
      <View style={[styles.background, styles.menuIconPosition]} />
      <Text style={[styles.myProfile, styles.myProfileTypo]} numberOfLines={1}>
        My Profile
      </Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/avatar_img1.png")}
      />
      <Text
        style={[styles.annamoongooglecom, styles.myProfileTypo]}
        numberOfLines={1}
      >
        anna.moon@google.com
      </Text>
      <Image
        style={[styles.menuIcon, styles.menuIconPosition]}
        contentFit="cover"
        source={require("../assets/menu3.png")}
      />
      <Text style={[styles.language, styles.languageTypo]}>Language</Text>
      <Text style={[styles.notifications, styles.notificationsPosition]}>
        Notifications
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={styles.bellOutlineIcon}
        contentFit="cover"
        source={require("../assets/belloutline.png")}
      />
      <Image
        style={[styles.chevronRightIcon, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.chevronRightIcon1, styles.changePasswordPosition]}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.chevronRightIcon2, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <Text style={[styles.changePassword, styles.changePasswordPosition]}>
        Change password
      </Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuIconPosition: {
    left: 0,
    position: "absolute",
    width: 393,
  },
  myProfileTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  languageTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  notificationsPosition: {
    top: 489,
    position: "absolute",
  },
  chevronIconLayout: {
    left: 322,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  changePasswordPosition: {
    top: 574,
    position: "absolute",
  },
  background: {
    top: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSkyblue,
    height: 210,
  },
  myProfile: {
    top: 69,
    left: 140,
    fontSize: FontSize.size_3xl,
    width: 114,
    height: 25,
  },
  maskGroupIcon: {
    top: 117,
    left: 119,
    width: 147,
    height: 151,
    position: "absolute",
  },
  annamoongooglecom: {
    top: 302,
    left: 108,
    fontSize: FontSize.size_sm,
    width: 189,
    height: 14,
  },
  menuIcon: {
    top: 797,
    height: 55,
  },
  language: {
    left: 112,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    top: 404,
    position: "absolute",
  },
  notifications: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 112,
  },
  vectorIcon: {
    height: "2.35%",
    width: "5.6%",
    top: "47.42%",
    right: "77.61%",
    bottom: "50.23%",
    left: "16.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bellOutlineIcon: {
    left: 64,
    height: 24,
    width: 24,
    top: 489,
    position: "absolute",
    overflow: "hidden",
  },
  chevronRightIcon: {
    top: 489,
    position: "absolute",
  },
  chevronRightIcon1: {
    left: 322,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  chevronRightIcon2: {
    top: 404,
    position: "absolute",
  },
  changePassword: {
    left: 68,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  vectorIcon1: {
    top: 222,
    left: 228,
    width: 38,
    height: 38,
    position: "absolute",
  },
  editProfileUser1: {
    backgroundColor: Color.colorWhite,
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default EditProfileUser1;
