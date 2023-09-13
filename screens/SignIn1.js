import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SignIn1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.signin1}
      onPress={() => navigation.navigate("WelcomeTutor")}
    >
      <Text style={[styles.createANew, styles.verifyTypo]}>
        Create a new account
      </Text>
      <Text style={styles.become}>Become a</Text>
      <TextInput
        style={[styles.name, styles.nameTypo]}
        placeholder="Full Name"
        placeholderTextColor="#484747"
      />
      <TextInput
        style={[styles.email, styles.nameTypo]}
        placeholder="Email"
        placeholderTextColor="#484747"
      />
      <TextInput
        style={[styles.password, styles.nameTypo]}
        placeholder={`Password
`}
        placeholderTextColor="#474747"
      />
      <Pressable style={[styles.signInBtn, styles.tutorBg]}>
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </Pressable>
      <View style={styles.framePosition} />
      <View style={[styles.frame1, styles.framePosition]}>
        <Pressable style={[styles.tutor, styles.tutorLayout]}>
          <Text style={[styles.tutor1, styles.tutor1Typo]}>Tutor</Text>
        </Pressable>
        <Pressable
          style={[styles.student, styles.tutorLayout]}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={[styles.student1, styles.tutor1Typo]}>Student</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  verifyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  nameTypo: {
    height: 70,
    width: 300,
    left: 46,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  tutorBg: {
    backgroundColor: Color.colorSkyblue,
    alignItems: "center",
  },
  framePosition: {
    height: 38,
    width: 269,
    left: 60,
    top: 531,
    position: "absolute",
    overflow: "hidden",
  },
  tutorLayout: {
    paddingVertical: Padding.p_2xs,
    width: 98,
    height: 38,
    borderRadius: Border.br_6xs,
  },
  tutor1Typo: {
    height: 15,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  createANew: {
    top: 149,
    left: 76,
    width: 248,
    height: 25,
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  become: {
    top: 487,
    left: 159,
    width: 82,
    height: 19,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  name: {
    top: 232,
  },
  email: {
    top: 314,
  },
  password: {
    top: 396,
  },
  verify: {
    height: 28,
    width: 65,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  signInBtn: {
    top: 661,
    width: 301,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSkyblue,
    left: 46,
    position: "absolute",
  },
  tutor1: {
    width: 42,
    color: Color.colorWhite,
  },
  tutor: {
    paddingHorizontal: 0,
    alignItems: "center",
    backgroundColor: Color.colorSkyblue,
  },
  student1: {
    color: Color.colorDarkslategray,
    width: 65,
  },
  student: {
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: 16,
    marginLeft: 73,
  },
  frame1: {
    flexDirection: "row",
    alignItems: "center",
  },
  signin1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default SignIn1;
