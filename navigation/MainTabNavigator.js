import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import CharScreen from "../screens/CharScreen";
import SkillScreen from "../screens/SkillScreen";
import CombatScreen from "../screens/CombatScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const CharStack = createStackNavigator(
  {
    Home: CharScreen
  },
  config
);

CharStack.navigationOptions = {
  tabBarLabel: "Character",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-person${focused ? "" : "-outline"}` : "md-person"}
    />
  )
};

CharStack.path = "";

const SkillStack = createStackNavigator(
  {
    Links: SkillScreen
  },
  config
);

SkillStack.navigationOptions = {
  tabBarLabel: "Skills",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-hand" : "md-hand"}
    />
  )
};

SkillScreen.path = "";

const CombatStack = createStackNavigator(
  {
    Settings: CombatScreen
  },
  config
);

CombatStack.navigationOptions = {
  tabBarLabel: "Combat",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-hammer" : "md-hammer"}
    />
  )
};

CombatScreen.path = "";

const tabNavigator = createBottomTabNavigator({
  CharStack,
  SkillScreen,
  CombatScreen
},{
  tabBarOptions: {
    activeTintColor: "#d00000"
  }
});

tabNavigator.path = "";

export default tabNavigator;
