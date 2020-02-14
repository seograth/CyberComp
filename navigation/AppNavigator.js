import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import EntryScreen from '../screens/EntryScreen';
import NewCharacter from '../screens/NewCharacter';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Entry: EntryScreen,
    Main: MainTabNavigator,
    New: NewCharacter
  },
  {
    initialRouteName: 'Entry',
    backBehavior: 'initialRoute'
  }
  )
);
