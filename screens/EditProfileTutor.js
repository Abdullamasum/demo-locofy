import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const EditProfileTutor = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.editProfileTutor}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "MainScreen" })
      }
    >
      <Image
        style={styles.startsIcon}
        contentFit="cover"
        source={require("../assets/starts1.png")}
      />
      <Text style={[styles.jamessmithgooglecom, styles.pythonTypo1]}>
        james.smith@google.com
      </Text>
      <Pressable style={[styles.calendar, styles.calendarLayout]}>
        <Image
          style={styles.calendarSvgrepoCom1Icon}
          contentFit="cover"
          source={require("../assets/calendarsvgrepocom-11.png")}
        />
        <Text style={[styles.myCalendar, styles.myCalendarTypo]}>
          My Calendar
        </Text>
      </Pressable>
      <Pressable style={[styles.calendar1, styles.calendarLayout]}>
        <Image
          style={styles.profileRound1342Icon}
          contentFit="cover"
          source={require("../assets/profile-round1342.png")}
        />
        <Text style={[styles.editProfile, styles.myCalendarTypo]}>
          Edit Profile
        </Text>
      </Pressable>
      <Text style={[styles.yourLessons, styles.pythonTypo]}>Your Lessons</Text>
      <View style={[styles.frame, styles.cardPosition]} />
      <View style={[styles.frame1, styles.cardLayout]} />
      <View style={[styles.frame, styles.cardPosition]} />
      <View style={[styles.frame1, styles.cardLayout]} />
      <View style={[styles.frame, styles.cardPosition]}>
        <View style={[styles.background, styles.cardPosition]} />
        <View style={[styles.background, styles.cardPosition]} />
        <Text style={[styles.myProfile, styles.myProfileFlexBox]}>
          My Profile
        </Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/avatar_img.png")}
        />
      </View>
      <View style={[styles.frame1, styles.cardLayout]}>
        <Image
          style={styles.cancelCircleSvgrepoCom1Icon}
          contentFit="cover"
          source={require("../assets/cancelcirclesvgrepocom-1.png")}
        />
        <View style={[styles.card, styles.cardLayout]}>
          <View style={[styles.email, styles.cardLayout]} />
          <Text style={[styles.python, styles.pythonTypo]}>Python</Text>
          <Text style={[styles.text, styles.textTypo]}>12.10.2023</Text>
          <Text style={[styles.text1, styles.textTypo]}>16:00 - 17:00</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pythonTypo1: {
    height: 14,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  calendarLayout: {
    alignItems: "center",
    height: 39,
    width: 301,
    left: 44,
    flexDirection: "row",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  myCalendarTypo: {
    height: 22,
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  pythonTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  cardPosition: {
    left: 0,
    top: 0,
  },
  cardLayout: {
    height: 75,
    width: 201,
    position: "absolute",
  },
  myProfileFlexBox: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    left: 90,
    height: 14,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  startsIcon: {
    top: 273,
    left: 153,
    width: 85,
    height: 16,
    position: "absolute",
  },
  jamessmithgooglecom: {
    top: 302,
    left: 108,
    fontSize: FontSize.size_sm,
    width: 189,
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  calendarSvgrepoCom1Icon: {
    width: 22,
    height: 28,
    overflow: "hidden",
  },
  myCalendar: {
    width: 111,
    marginLeft: 56,
  },
  calendar: {
    top: 349,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
  },
  profileRound1342Icon: {
    width: 27,
    height: 27,
  },
  editProfile: {
    width: 96,
    marginLeft: 61,
  },
  calendar1: {
    top: 401,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
  },
  yourLessons: {
    top: 611,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 107,
    height: 21,
    left: 30,
  },
  frame: {
    height: 260,
    width: 393,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 644,
    left: 30,
    overflow: "hidden",
  },
  background: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    height: 210,
    width: 393,
    backgroundColor: Color.colorSkyblue,
    top: 0,
    position: "absolute",
  },
  myProfile: {
    top: 69,
    left: 140,
    fontSize: FontSize.size_3xl,
    width: 114,
    height: 25,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorDarkslategray,
  },
  maskGroupIcon: {
    top: 117,
    left: 123,
    width: 143,
    height: 143,
    position: "absolute",
  },
  cancelCircleSvgrepoCom1Icon: {
    top: 8,
    left: 175,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  email: {
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    borderRadius: Border.br_6xs,
    width: 201,
  },
  python: {
    top: 26,
    left: 15,
    width: 57,
    height: 14,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text: {
    top: 21,
    width: 99,
  },
  text1: {
    top: 40,
    width: 82,
  },
  card: {
    left: 0,
    top: 0,
  },
  editProfileTutor: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default EditProfileTutor;
