import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Home from "./screens/Home2";
import Events from "./screens/Events";
import Officers from "./screens/Officers";
import Links from "./screens/UsefulLinksAjax";
import PDF from "./screens/PDF";

const App = createDrawerNavigator(
  {
    "Home": {
      path: '/:name',
      screen: Home
    },
    "Events": {
      path: '/',
      screen: Events
    },
    "Branch Officers": {
      path: '/',
      screen: Officers
    },
    "Useful Links": {
      path: '/',
      screen: Links
    },
    "PDF": {
      path: '/',
      screen: PDF,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: () => null
      }
    }
  },
  {
    initialRouteName: "Home",
    drawerPosition: 'left'

  }
);

export default App;