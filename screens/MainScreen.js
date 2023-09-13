import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardContainer1 from "../components/CardContainer1";
import CardContainer2 from "../components/CardContainer2";
import CardContainer from "../components/CardContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.mainScreen}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "ProfileTutor" })
      }
    >
      <CardContainer1 />
      <CardContainer2 />
      <View style={styles.filter}>
        <Pressable style={[styles.all, styles.allFlexBox]} allBtn="All">
          <View style={[styles.allChild, styles.childBorder]} />
          <Text style={styles.all1}>All</Text>
        </Pressable>
        <Pressable style={[styles.eng, styles.engSpaceBlock]}>
          <View style={[styles.engChild, styles.engLayout]} />
          <Text style={styles.english}>English</Text>
        </Pressable>
        <Pressable style={[styles.eng, styles.engSpaceBlock]}>
          <View style={[styles.engChild, styles.engLayout]} />
          <Text style={styles.english}>Finnish</Text>
        </Pressable>
        <Pressable style={[styles.sql, styles.sqlLayout]}>
          <View style={[styles.sqlChild, styles.sqlLayout]} />
          <Text style={[styles.sql1, styles.sql1Typo]}>SQL</Text>
        </Pressable>
        <Pressable style={[styles.pyth, styles.pythLayout]}>
          <View style={[styles.pythChild, styles.pythLayout]} />
          <Text style={[styles.python, styles.sql1Typo]}>Python</Text>
        </Pressable>
      </View>
      <View style={[styles.searching, styles.searchingLayout]}>
        <View style={[styles.searchingChild, styles.searchingLayout]} />
        <Image
          style={styles.searchingIcon}
          contentFit="cover"
          source={require("../assets/searching.png")}
        />
      </View>
      <CardContainer />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  allFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  childBorder: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
  },
  engSpaceBlock: {
    marginLeft: 11,
    justifyContent: "flex-end",
  },
  engLayout: {
    width: 70,
    height: 31,
  },
  sqlLayout: {
    width: 44,
    height: 31,
  },
  sql1Typo: {
    marginTop: -23,
    height: 15,
    color: Color.colorSkyblue,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  pythLayout: {
    width: 67,
    height: 31,
  },
  searchingLayout: {
    height: 48,
    width: 337,
  },
  allChild: {
    backgroundColor: Color.colorSkyblue,
    borderColor: Color.colorSkyblue,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    width: 34,
    height: 31,
  },
  all1: {
    color: Color.colorWhite,
    width: 23,
    marginTop: -25,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  all: {
    width: 34,
    height: 31,
  },
  engChild: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    borderColor: Color.colorSkyblue,
    backgroundColor: Color.colorWhite,
  },
  english: {
    width: 59,
    color: Color.colorSkyblue,
    marginTop: -25,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  eng: {
    alignItems: "flex-end",
    width: 70,
    height: 31,
  },
  sqlChild: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    borderColor: Color.colorSkyblue,
    backgroundColor: Color.colorWhite,
  },
  sql1: {
    width: 33,
  },
  sql: {
    marginLeft: 11,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  pythChild: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    borderColor: Color.colorSkyblue,
    backgroundColor: Color.colorWhite,
  },
  python: {
    width: 56,
  },
  pyth: {
    marginLeft: 11,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  filter: {
    top: 142,
    width: 329,
    alignItems: "center",
    height: 31,
    left: 28,
    position: "absolute",
    flexDirection: "row",
    overflow: "hidden",
  },
  searchingChild: {
    borderColor: Color.colorDarkslategray,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    height: 48,
    width: 337,
    backgroundColor: Color.colorWhite,
  },
  searchingIcon: {
    width: 30,
    height: 30,
    marginLeft: -326,
    overflow: "hidden",
  },
  searching: {
    top: 74,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 48,
    width: 337,
    left: 28,
    position: "absolute",
    flexDirection: "row",
    overflow: "hidden",
  },
  mainScreen: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MainScreen;
