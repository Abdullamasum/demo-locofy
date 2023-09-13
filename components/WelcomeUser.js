import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const WelcomeUser = () => {
  return (
    <View style={styles.welcomeUser}>
      <View style={styles.frame}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.pleaseCompleteYour}>
          Please complete your profile
        </Text>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <View style={styles.frame4}>
              <Image
                style={styles.photoBtnIcon}
                contentFit="cover"
                source={require("../assets/photo-btn.png")}
              />
              <Text style={styles.addYourPhoto}>Add your photo</Text>
            </View>
            <Image
              style={styles.starMustIcon}
              contentFit="cover"
              source={require("../assets/starmust.png")}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <Pressable style={styles.signInBtn}>
          <Text style={styles.submit}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 107,
    height: 25,
  },
  pleaseCompleteYour: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    width: 222,
    height: 23,
    marginTop: 13,
  },
  frame: {
    width: 222,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  photoBtnIcon: {
    borderRadius: Border.br_6xs,
    width: 75,
    height: 40,
    marginTop: 35,
  },
  addYourPhoto: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 29,
    height: 21,
    marginTop: -75,
  },
  frame4: {
    width: 175,
    height: 75,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  starMustIcon: {
    position: "relative",
    width: 38,
    height: 38,
    overflow: "hidden",
    marginLeft: -58,
  },
  frame3: {
    width: 175,
    height: 75,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frameChild: {
    width: 87,
    height: 76,
    marginTop: 11,
    marginLeft: 48,
  },
  frame2: {
    width: 299,
    height: 87,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  submit: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 78,
    height: 28,
  },
  signInBtn: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSkyblue,
    width: 301,
    height: 54,
    flexDirection: "column",
    paddingHorizontal: Padding.p_92xl,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 467,
  },
  frame1: {
    width: 301,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 17,
  },
  welcomeUser: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: 393,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_60xl,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default WelcomeUser;
