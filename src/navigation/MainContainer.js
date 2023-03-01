import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

// imports required for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "../screens/Home.screen";
import Profile from "../screens/Profile.screen";
import PlMatchday from "../screens/plMatchday.screen";

// Screen names - placed on top of the screen
const screenNames = {
  homeScreen: "Home",
  profileScreen: "Profile",
  plMatchday: "Matches",
};

const Tab = createBottomTabNavigator();

const screenOptionsFunction = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    let rn = route.name;

    if (rn === screenNames.homeScreen) {
      iconName = focused ? "home" : "home-outline";
    } else if (rn === screenNames.profileScreen) {
      iconName = focused ? "settings" : "settings-outline";
    } else if (rn === screenNames.plMatchday) {
      iconName = focused ? "home" : "home-outline";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={screenNames.homeScreen}
        screenOptions={screenOptionsFunction}
      >
        <Tab.Screen name={screenNames.homeScreen} component={Home} />
        <Tab.Screen name={screenNames.plMatchday} component={PlMatchday} />
        <Tab.Screen name={screenNames.profileScreen} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
