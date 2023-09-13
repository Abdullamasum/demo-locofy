import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfileTutor1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.editProfileTutor1}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "MainScreen" })
      }
    >
      <View style={styles.background} />
      <View style={styles.background} />
      <Text style={[styles.myProfile, styles.myProfileTypo]}>My Profile</Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/avatar_img.png")}
      />
      <Text style={[styles.jamessmithgooglecom, styles.myProfileTypo]}>
        james.smith@google.com
      </Text>
      <Text style={[styles.language, styles.languageTypo]}>Language</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.notifications, styles.languageTypo]}>
        Notifications
      </Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.bellOutlineIcon, styles.bellIconLayout]}
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
      <Image
        style={[styles.bellOutlineIcon1, styles.bellIconLayout]}
        contentFit="cover"
        source={require("../assets/belloutline.png")}
      />
      <Text style={[styles.changePassword, styles.changePasswordPosition]}>
        Change password
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
  bellIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  chevronIconLayout: {
    left: 328,
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
    left: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSkyblue,
    height: 210,
    position: "absolute",
    width: 393,
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
    left: 123,
    width: 143,
    height: 150,
    position: "absolute",
  },
  jamessmithgooglecom: {
    top: 302,
    left: 108,
    fontSize: FontSize.size_sm,
    width: 189,
    height: 14,
  },
  language: {
    left: 118,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 404,
  },
  vectorIcon: {
    top: 222,
    left: 228,
    width: 38,
    height: 38,
    position: "absolute",
  },
  notifications: {
    top: 489,
    left: 118,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.35%",
    width: "5.6%",
    top: "47.42%",
    right: "76.08%",
    bottom: "50.23%",
    left: "18.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bellOutlineIcon: {
    left: 70,
    top: 489,
  },
  chevronRightIcon: {
    top: 489,
    position: "absolute",
  },
  chevronRightIcon1: {
    left: 328,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  chevronRightIcon2: {
    top: 404,
    position: "absolute",
  },
  bellOutlineIcon1: {
    top: 504,
    left: 235,
  },
  changePassword: {
    left: 74,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  editProfileTutor1: {
    backgroundColor: Color.colorWhite,
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default EditProfileTutor1;
