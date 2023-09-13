const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Bell from "./components/Bell";
import SignIn1 from "./screens/SignIn1";
import LogIn from "./screens/LogIn";
import WelcomeUser from "./components/WelcomeUser";
import WelcomeTutor from "./screens/WelcomeTutor";
import MainScreen from "./screens/MainScreen";
import EditProfileTutor from "./screens/EditProfileTutor";
import EditProfileTutor1 from "./components/EditProfileTutor1";
import EditProfileUser from "./screens/EditProfileUser";
import EditProfileUser1 from "./components/EditProfileUser1";
import ProfileUser from "./components/ProfileUser";
import Calendar from "./screens/Calendar";
import Schedule from "./screens/Schedule";
import Colors from "./screens/Colors";
import ChevronRight from "./components/ChevronRight";
import BellOutline from "./components/BellOutline";
import BellOutline1 from "./components/BellOutline1";
import ArrowDownBoldOutline from "./screens/ArrowDownBoldOutline";
import Bell1 from "./components/Bell1";
import Bell2 from "./components/Bell2";
import CameraPlus from "./screens/CameraPlus";
import ProfileTutor from "./components/ProfileTutor";
import HomeIcon from "./components/HomeIcon";
import HomeIcon1 from "./components/HomeIcon1";
import EducationIcon from "./components/EducationIcon";
import EducationIcon1 from "./components/EducationIcon1";
import Start from "./screens/Start";
import Card from "./components/Card";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <HomeIcon1 />,
    <EducationIcon1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeIcon />,
    <EducationIcon />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 393,
              height: 55,
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfileTutor"
        component={ProfileTutor}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName="Start"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="BottomTabsRoot"
                  component={BottomTabsRoot}
                />
                <Stack.Screen
                  name="SignIn1"
                  component={SignIn1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LogIn"
                  component={LogIn}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WelcomeTutor"
                  component={WelcomeTutor}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EditProfileTutor"
                  component={EditProfileTutor}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EditProfileUser"
                  component={EditProfileUser}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Calendar"
                  component={Calendar}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Schedule"
                  component={Schedule}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Colors"
                  component={Colors}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ArrowDownBoldOutline"
                  component={ArrowDownBoldOutline}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CameraPlus"
                  component={CameraPlus}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeIcon"
                  component={HomeIcon}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeIcon1"
                  component={HomeIcon1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EducationIcon"
                  component={EducationIcon}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EducationIcon1"
                  component={EducationIcon1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Start"
                  component={Start}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Card"
                  component={Card}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;
