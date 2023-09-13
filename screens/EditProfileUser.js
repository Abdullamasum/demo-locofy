import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import ProfileCard from "../components/ProfileCard";
import LessonCard1 from "../components/LessonCard1";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const EditProfileUser = () => {
  return (
    <View style={styles.editProfileUser}>
      <Text
        style={[styles.annamoongooglecom, styles.yourLessonsFlexBox]}
        numberOfLines={1}
      >
        anna.moon@google.com
      </Text>
      <Pressable style={[styles.calendarBtm, styles.calendarBtmLayout]}>
        <Image
          style={styles.calendarSvgrepoCom1Icon}
          contentFit="cover"
          source={require("../assets/calendarsvgrepocom-11.png")}
        />
        <Text style={[styles.myCalendar, styles.myCalendarTypo]}>
          My Calendar
        </Text>
      </Pressable>
      <Pressable style={[styles.editProfileBtn, styles.calendarBtmLayout]}>
        <Image
          style={styles.profileRound1342Icon}
          contentFit="cover"
          source={require("../assets/profile-round1342.png")}
        />
        <Text style={[styles.editProfile, styles.myCalendarTypo]}>
          Edit Profile
        </Text>
      </Pressable>
      <Text style={[styles.yourLessons, styles.frame1Position]}>
        Your Lessons
      </Text>
      <View style={styles.frame} />
      <View style={[styles.frame1, styles.frame1Position]} />
      <ProfileCard />
      <LessonCard1 />
    </View>
  );
};

const styles = StyleSheet.create({
  yourLessonsFlexBox: {
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  calendarBtmLayout: {
    alignItems: "center",
    height: 39,
    width: 301,
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    left: 44,
    flexDirection: "row",
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
  frame1Position: {
    left: 30,
    position: "absolute",
  },
  annamoongooglecom: {
    top: 302,
    left: 108,
    fontSize: FontSize.size_sm,
    width: 189,
    height: 14,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
  calendarBtm: {
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
  editProfileBtn: {
    top: 401,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
  },
  yourLessons: {
    top: 611,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 107,
    height: 21,
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  frame: {
    top: 0,
    left: 0,
    height: 260,
    width: 393,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 644,
    width: 201,
    height: 75,
    overflow: "hidden",
  },
  editProfileUser: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default EditProfileUser;
