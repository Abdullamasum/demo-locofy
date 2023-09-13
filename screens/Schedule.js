import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, Switch } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ScheduleTimeForm from "../components/ScheduleTimeForm";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Schedule = () => {
  const [frameSwitchSwitchValueState, setFrameSwitchSwitchValueState] =
    useState(false);
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.schedule}
      onPress={() => navigation.navigate("EditProfileUser")}
    >
      <View style={styles.frame}>
        <ScheduleTimeForm />
        <View style={styles.frame1}>
          <Text style={styles.selectTime}>Select time</Text>
        </View>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <Pressable style={styles.timeBtn}>
              <Text style={styles.student}>10:00-11:00</Text>
            </Pressable>
            <Pressable style={styles.timeBtn1}>
              <Text style={styles.time}>12:00-13:00</Text>
            </Pressable>
            <Pressable style={styles.timeBtn2}>
              <Text style={styles.student}>13:00-14:00</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <View style={styles.frame6}>
              <Pressable style={styles.topicBtn}>
                <Text style={styles.student2}>Python</Text>
              </Pressable>
              <Pressable style={styles.topicBtn1}>
                <Text style={styles.student3}>Java</Text>
              </Pressable>
            </View>
            <Switch
              style={styles.frameChild}
              value={frameSwitchSwitchValueState}
              onValueChange={setFrameSwitchSwitchValueState}
              thumbColor="#d9d9d9"
              trackColor={{ false: "#939393", true: "#65cdef" }}
            />
          </View>
        </View>
        <View style={styles.frame7}>
          <View style={styles.frame8}>
            <Text style={styles.selectTime}>Select topic</Text>
            <Text style={styles.notification}>{`Notification `}</Text>
          </View>
        </View>
      </View>
      <View style={styles.frame9}>
        <View style={styles.frame10}>
          <Pressable style={styles.tutor}>
            <Text style={styles.confirm}>Confirm</Text>
          </Pressable>
          <Pressable style={styles.student4}>
            <Text style={styles.student5}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectTime: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 91,
    height: 21,
  },
  frame1: {
    position: "absolute",
    top: 501,
    left: 0,
    width: 128,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  student: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 72,
    height: 15,
  },
  timeBtn: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 98,
    height: 38,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorSkyblue,
    textAlign: "left",
    width: 72,
    height: 15,
  },
  timeBtn1: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorSkyblue,
    borderWidth: 1,
    width: 98,
    height: 38,
    flexDirection: "column",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 16,
  },
  timeBtn2: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 98,
    height: 38,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
  frame3: {
    width: 327,
    height: 38,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame2: {
    position: "absolute",
    top: 532,
    left: 0,
    width: 364,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  student2: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 44,
    height: 15,
  },
  topicBtn: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 58,
    height: 32,
    flexDirection: "column",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 8,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  student3: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorSkyblue,
    textAlign: "left",
    width: 30,
    height: 15,
  },
  topicBtn1: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorSkyblue,
    borderWidth: 1,
    width: 45,
    height: 32,
    flexDirection: "column",
    paddingHorizontal: 7,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 15,
  },
  frame6: {
    width: 118,
    height: 32,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameChild: {
    borderRadius: 15,
    width: 50,
    height: 20,
    flexDirection: "column",
    paddingHorizontal: 2,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 157,
  },
  frame5: {
    width: 325,
    height: 32,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame4: {
    position: "absolute",
    top: 621,
    left: 0,
    width: 362,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  notification: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 91,
    height: 21,
    marginLeft: 143,
  },
  frame8: {
    width: 325,
    height: 21,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame7: {
    position: "absolute",
    top: 590,
    left: 0,
    width: 362,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame: {
    position: "relative",
    width: 393,
    height: 653,
    overflow: "hidden",
  },
  confirm: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 65,
    height: 15,
  },
  tutor: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSkyblue,
    width: 98,
    height: 38,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  student5: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 65,
    height: 15,
  },
  student4: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 98,
    height: 38,
    flexDirection: "column",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginLeft: 73,
  },
  frame10: {
    width: 269,
    height: 38,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 66,
  },
  frame9: {
    width: 393,
    height: 58,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 43,
  },
  schedule: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Schedule;
