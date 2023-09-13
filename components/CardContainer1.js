import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CardContainer1 = () => {
  return (
    <View style={[styles.card, styles.cardLayout]}>
      <View style={styles.email}>
        <View style={[styles.emailChild, styles.cardLayout]} />
      </View>
      <Text
        style={[styles.helenaNiemi, styles.helenaNiemiTypo]}
        numberOfLines={1}
      >
        Helena Niemi
      </Text>
      <Text style={[styles.availableDays, styles.helenaNiemiTypo]}>
        Available days
      </Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/avat_tut.png")}
      />
      <View style={[styles.all, styles.allLayout]}>
        <View style={[styles.allChild, styles.allLayout]} />
        <Text style={styles.finnish}>Finnish</Text>
      </View>
      <Image
        style={[styles.unitedStates2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/unitedstates-2.png")}
      />
      <Image
        style={styles.startsIcon}
        contentFit="cover"
        source={require("../assets/starts.png")}
      />
      <Image
        style={styles.calendarSvgrepoCom1Icon}
        contentFit="cover"
        source={require("../assets/calendarsvgrepocom-1.png")}
      />
      <Image
        style={[styles.finland1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/finland-1.png")}
      />
      <Text style={styles.h} numberOfLines={1}>
        20€/h
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 131,
    width: 337,
  },
  helenaNiemiTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  allLayout: {
    height: 31,
    width: 66,
  },
  iconLayout: {
    width: 18,
    top: 100,
    height: 18,
    position: "absolute",
  },
  emailChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_6xs,
  },
  email: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 337,
    position: "absolute",
  },
  helenaNiemi: {
    top: 73,
    width: 107,
    height: 19,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 19,
  },
  availableDays: {
    top: 61,
    left: 234,
    fontSize: FontSize.size_xs,
    width: 84,
    height: 14,
  },
  maskGroupIcon: {
    top: 7,
    width: 58,
    height: 59,
    left: 19,
    position: "absolute",
  },
  allChild: {
    backgroundColor: Color.colorSkyblue,
    borderStyle: "solid",
    borderColor: Color.colorSkyblue,
    borderWidth: 1.5,
    borderRadius: Border.br_6xs,
  },
  finnish: {
    color: Color.colorWhite,
    marginTop: -25,
    height: 18,
    width: 60,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  all: {
    top: 10,
    left: 252,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
  },
  unitedStates2Icon: {
    left: 19,
  },
  startsIcon: {
    top: 102,
    left: 260,
    width: 62,
    height: 16,
    position: "absolute",
  },
  calendarSvgrepoCom1Icon: {
    top: 13,
    left: 163,
    width: 108,
    height: 108,
    overflow: "hidden",
    position: "absolute",
  },
  finland1Icon: {
    left: 46,
  },
  h: {
    top: 15,
    left: 96,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.8,
    height: 21,
    width: 60,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  card: {
    top: 525,
    left: 28,
    position: "absolute",
  },
});

export default CardContainer1;
