import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ScheduleTimeForm from "./ScheduleTimeForm";
import { Color } from "../GlobalStyles";

const ProfileUser = () => {
  return (
    <View style={styles.profileUser}>
      <ScheduleTimeForm backgroundTop={-694} backgroundLeft={950} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileUser: {
    backgroundColor: Color.colorWhite,
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default ProfileUser;
