import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.start}
      onPress={() => navigation.navigate("SignIn1")}
    >
      <View style={styles.frame}>
        <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
        <Pressable
          style={styles.logIn}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
        </Pressable>
      </View>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frame2FlexBox]}>
          <View style={styles.appName}>
            <Text style={[styles.yourtutor, styles.logIn1Typo]}>YourTutor</Text>
            <Text style={[styles.findYourBest, styles.signInTypo]}>
              Find your best tutor
            </Text>
          </View>
          <ImageBackground
            style={styles.edu11Icon}
            resizeMode="cover"
            source={require("../assets/edu1.png")}
          />
        </View>
        <Pressable style={[styles.signInBtn, styles.frame2FlexBox]}>
          <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logIn1Typo: {
    color: Color.colorSkyblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frame2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signInTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  alreadyHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 199,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_base,
    height: 21,
  },
  logIn1: {
    width: 50,
    fontSize: FontSize.size_base,
    color: Color.colorSkyblue,
    height: 21,
  },
  logIn: {
    marginLeft: 6,
  },
  frame: {
    top: 641,
    left: 64,
    width: 255,
    flexDirection: "row",
    alignItems: "center",
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  yourtutor: {
    fontSize: 40,
    height: 54,
    width: 198,
  },
  findYourBest: {
    fontSize: FontSize.size_lg,
    width: 179,
    height: 33,
    marginTop: 8,
    color: Color.colorDarkslategray,
    fontWeight: "600",
  },
  appName: {
    height: 95,
    width: 198,
    alignItems: "center",
  },
  edu11Icon: {
    height: 323,
    marginTop: -16,
    width: 454,
  },
  frame2: {
    height: 402,
    width: 454,
    overflow: "hidden",
  },
  signIn: {
    fontSize: FontSize.size_3xl,
    color: Color.colorWhite,
    width: 75,
    height: 28,
  },
  signInBtn: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSkyblue,
    width: 301,
    marginTop: 10,
    height: 54,
  },
  frame1: {
    top: 146,
    left: -31,
    height: 466,
    width: 454,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  start: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Start;
