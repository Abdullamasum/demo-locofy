import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FormFrame = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.pleaseCompleteYour}>
        Please complete your profile
      </Text>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <TextInput
            style={styles.name}
            placeholder="What can you teach?"
            placeholderTextColor="#484747"
          />
          <Image
            style={styles.photoBtnIcon}
            contentFit="cover"
            source={require("../assets/photo-btn1.png")}
          />
        </View>
        <View style={styles.frame3}>
          <View style={styles.frame4}>
            <View style={styles.frame5}>
              <Text style={styles.addYourPhoto}>Add your photo</Text>
            </View>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>
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
  name: {
    width: 161,
    height: 70,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_base,
    marginTop: 91,
  },
  photoBtnIcon: {
    borderRadius: Border.br_6xs,
    width: 75,
    height: 40,
    marginTop: 35,
    marginLeft: -299,
  },
  frame2: {
    width: 300,
    height: 161,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  addYourPhoto: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 170,
    height: 21,
  },
  frame5: {
    width: 170,
    height: 29,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameIcon: {
    position: "relative",
    width: 76,
    height: 120,
    overflow: "hidden",
    marginLeft: -53,
  },
  frame4: {
    width: 193,
    height: 120,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameChild: {
    width: 87,
    height: 76,
    marginTop: 11,
    marginLeft: 30,
  },
  frame3: {
    width: 299,
    height: 120,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -161,
  },
  frame1: {
    alignSelf: "stretch",
    height: 161,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 13,
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default FormFrame;
