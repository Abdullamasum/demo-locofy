import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormFrame from "../components/FormFrame";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const WelcomeTutor = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.welcomeTutor}
      onPress={() => navigation.navigate("EditProfileTutor")}
    >
      <FormFrame />
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <View style={styles.frameChild} />
          </View>
          <View style={styles.frame3}>
            <View style={styles.frame2}>
              <Text style={styles.languagesYouSpeak}>Languages you speak</Text>
            </View>
            <Image
              style={styles.starMustIcon}
              contentFit="cover"
              source={require("../assets/starmust1.png")}
            />
          </View>
        </View>
        <Pressable style={styles.signInBtn}>
          <Text style={styles.submit}>Submit</Text>
        </Pressable>
      </View>
      <View style={styles.frame5}>
        <View style={styles.frame6}>
          <TextInput
            style={styles.password}
            placeholder="Short description about you "
            placeholderTextColor="#484747"
          />
          <Image
            style={styles.starMustIcon1}
            contentFit="cover"
            source={require("../assets/starmust2.png")}
          />
        </View>
        <View style={styles.frame7}>
          <TextInput
            style={styles.name}
            placeholder="Price / h in €"
            placeholderTextColor="#484747"
          />
          <View style={styles.frame8}>
            <Text style={styles.yourAvailability}> Your availability</Text>
            <Image
              style={styles.availBtnIcon}
              contentFit="cover"
              source={require("../assets/avail-btn.png")}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 40,
  },
  frame2: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  languagesYouSpeak: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "center",
  },
  starMustIcon: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 38,
    marginLeft: -9,
  },
  frame3: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -301,
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  submit: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  signInBtn: {
    alignSelf: "stretch",
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSkyblue,
    flexDirection: "column",
    paddingHorizontal: Padding.p_92xl,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 318,
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 3,
  },
  password: {
    width: 132,
    height: 124,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_base,
    marginTop: 8,
  },
  starMustIcon1: {
    position: "relative",
    width: 38,
    height: 38,
    overflow: "hidden",
    marginLeft: -91,
  },
  frame6: {
    alignSelf: "stretch",
    height: 132,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  name: {
    width: 147,
    height: 75,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_base,
  },
  yourAvailability: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 127,
    height: 21,
  },
  availBtnIcon: {
    position: "relative",
    width: 132,
    height: 40,
    marginTop: 6,
  },
  frame8: {
    width: 132,
    height: 67,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 22,
  },
  frame7: {
    alignSelf: "stretch",
    height: 75,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  frame5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 3,
  },
  welcomeTutor: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: Padding.p_27xl,
    paddingTop: Padding.p_60xl,
    paddingBottom: 87,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});

export default WelcomeTutor;
