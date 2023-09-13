import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.login, styles.loginFlexBox]}
      onPress={() => navigation.navigate("WelcomeTutor")}
    >
      <View style={styles.frame}>
        <Text style={[styles.logInTo, styles.logTypo]}>
          Log in to your account
        </Text>
        <TextInput
          style={[styles.password, styles.emailTypo]}
          placeholder={`Password
`}
          placeholderTextColor="#484747"
        />
      </View>
      <View style={[styles.frame1, styles.loginFlexBox]}>
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Email"
          placeholderTextColor="#484747"
        />
        <Pressable style={styles.logInBtn}>
          <Text style={[styles.logIn, styles.logTypo]}>Log in</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  logTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  emailTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 300,
  },
  logInTo: {
    color: Color.colorBlack,
    width: 248,
    height: 25,
  },
  password: {
    marginTop: 140,
  },
  frame: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    overflow: "hidden",
  },
  email: {
    height: 70,
  },
  logIn: {
    color: Color.colorWhite,
    width: 65,
    height: 28,
  },
  logInBtn: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSkyblue,
    width: 301,
    height: 54,
    paddingHorizontal: 117,
    paddingVertical: 0,
    alignItems: "flex-end",
    marginTop: 358,
    justifyContent: "center",
  },
  frame1: {
    width: 304,
    paddingRight: 3,
    marginTop: -152,
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_27xl,
    paddingTop: 149,
    paddingRight: 43,
    paddingBottom: 137,
  },
});

export default LogIn;
