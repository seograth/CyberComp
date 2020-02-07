import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import CharScreen from "../screens/CharScreen";
import SkillScreen from "../screens/SkillScreen";
import CombatScreen from "../screens/CombatScreen";
import ItemScreen from "../screens/ItemScreen";


const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const CharStack = createStackNavigator(
  {
    Char: CharScreen
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
    Skills: SkillScreen
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
    Combat: CombatScreen
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

const ItemStack = createStackNavigator(
  {
    Items: ItemScreen
  },
  config
);

CombatStack.navigationOptions = {
  tabBarLabel: "Item",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-hammer" : "md-hammer"}
    />
  )
};

ItemScreen.path = "";

const tabNavigator = createBottomTabNavigator({
  CharStack,
  SkillStack,
  CombatStack,
  ItemStack
},{
  tabBarOptions: {
    activeTintColor: "#d00000"
  }
});

tabNavigator.path = "";

export default tabNavigator;
