import React, { useMemo } from "react";
import { View, StyleSheet, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LessonCard = ({
  programmingLanguage,
  eventDate,
  componentCode,
  propLeft,
  propWidth,
  propHeight,
}) => {
  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const pythonStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  return (
    <View style={[styles.card, styles.cardLayout, cardStyle]}>
      <View style={[styles.email, styles.cardLayout]} />
      <Text style={[styles.python, pythonStyle]}>{programmingLanguage}</Text>
      <Text style={[styles.text, styles.textTypo]}>{eventDate}</Text>
      <Text style={[styles.text1, styles.textTypo]}>16:00 - 17:00</Text>
      <Image
        style={styles.cancelCircleSvgrepoCom1Icon}
        contentFit="cover"
        source={componentCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 75,
    width: 201,
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
  email: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  python: {
    top: 26,
    left: 15,
    fontSize: FontSize.size_base,
    width: 57,
    height: 14,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text: {
    top: 21,
    width: 99,
  },
  text1: {
    top: 40,
    width: 82,
  },
  cancelCircleSvgrepoCom1Icon: {
    top: 8,
    left: 175,
    width: 18,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  card: {
    top: 628,
    left: 37,
  },
});

export default LessonCard;
