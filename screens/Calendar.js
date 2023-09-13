import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import LessonCard from "../components/LessonCard";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Calendar = () => {
  const [image1DatePicker, setImage1DatePicker] = useState(undefined);

  return (
    <View style={styles.calendar}>
      <Image
        style={[styles.menuIcon, styles.menuIconPosition]}
        contentFit="cover"
        source={require("../assets/menu4.png")}
      />
      <View style={[styles.background, styles.menuIconPosition]} />
      <View style={[styles.frame, styles.frameLayout]}>
        <Text style={[styles.yourCalendar, styles.yourClr]}>Your calendar</Text>
        <RNKDatepicker
          style={[styles.image1, styles.frameLayout]}
          date={image1DatePicker}
          onSelect={setImage1DatePicker}
          controlStyle={styles.image1DatePickerValue}
        />
      </View>
      <LessonCard
        programmingLanguage="Python"
        eventDate="12.10.2023"
        componentCode={require("../assets/cancelcirclesvgrepocom-1.png")}
      />
      <LessonCard
        programmingLanguage="Java"
        eventDate="13.10.2023"
        componentCode={require("../assets/cancelcirclesvgrepocom-2.png")}
        propLeft={254}
        propWidth={70}
        propHeight={30}
      />
      <Text style={[styles.yourLessons, styles.yourClr]}>Your Lessons</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image1DatePickerValue: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 314,
    height: 361,
  },
  menuIconPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 314,
    position: "absolute",
  },
  yourClr: {
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  menuIcon: {
    top: 797,
    height: 55,
  },
  background: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSkyblue,
    height: 210,
    top: 0,
  },
  yourCalendar: {
    marginLeft: -131,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    width: 252,
    height: 33,
    left: "50%",
    top: 0,
  },
  image1: {
    top: "50%",
    height: 361,
    left: "50%",
  },
  frame: {
    top: 91,
    left: 41,
    height: 409,
    overflow: "hidden",
  },
  yourLessons: {
    top: 595,
    left: 37,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    width: 107,
    height: 21,
  },
  calendar: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Calendar;
