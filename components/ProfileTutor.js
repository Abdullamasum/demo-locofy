import * as React from "react";
import { Button } from "@ui-kitten/components";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ProfileTutor = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.profileTutor}
      title="Olga Skvortsova"
      appearance="filled"
      color="#fff"
      textStyle={styles.profileTutorText}
      onPress={() => navigation.navigate("Schedule")}
    >
      Olga Skvortsova
    </Button>
  );
};

const styles = StyleSheet.create({
  profileTutorText: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignItems: "flex-end",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  emailPosition: {
    top: 0,
    position: "absolute",
  },
  frameIconLayout: {
    height: 23,
    width: 17,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  jamesSmithTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorDarkslategray,
  },
  jamesTypo: {
    letterSpacing: 0.6,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  allBorder: {
    borderWidth: 1.5,
    borderColor: Color.colorSkyblue,
    borderStyle: "solid",
    height: 31,
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    top: 0,
    justifyContent: "center",
    position: "absolute",
  },
  javaTypo: {
    height: 18,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  profileTutor: {
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default ProfileTutor;
