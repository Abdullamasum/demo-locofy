import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ScheduleTimeForm = ({ backgroundTop, backgroundLeft }) => {
  const [image1DatePicker, setImage1DatePicker] = useState(undefined);
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", backgroundTop),
      ...getStyleValue("left", backgroundLeft),
    };
  }, [backgroundTop, backgroundLeft]);

  return (
    <View style={[styles.frame, styles.frameLayout, frameStyle]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.background} />
        <View style={styles.frameChild} />
      </View>
      <View style={styles.frame2}>
        <Text style={[styles.scheduleTime, styles.image1Position]}>
          Schedule Time
        </Text>
        <RNKDatepicker
          style={[styles.image1, styles.image1Position]}
          date={image1DatePicker}
          onSelect={setImage1DatePicker}
          controlStyle={styles.image1DatePickerValue}
        />
      </View>
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
  frameLayout: {
    alignItems: "center",
    height: 489,
    overflow: "hidden",
    width: 393,
  },
  image1Position: {
    left: "50%",
    position: "absolute",
  },
  background: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSkyblue,
    height: 210,
    width: 393,
  },
  frameChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 329,
    height: 370,
    marginTop: -91,
  },
  frame1: {
    justifyContent: "center",
  },
  scheduleTime: {
    marginLeft: -131,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "center",
    width: 252,
    height: 33,
    top: 0,
  },
  image1: {
    top: "50%",
    height: 361,
    width: 314,
  },
  frame2: {
    height: 409,
    marginTop: -415,
    width: 314,
    overflow: "hidden",
  },
  frame: {
    left: 0,
    justifyContent: "flex-end",
    top: 0,
    position: "absolute",
    alignItems: "center",
    height: 489,
  },
});

export default ScheduleTimeForm;
