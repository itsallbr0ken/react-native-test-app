import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Home from "./screens/Home2";
import SecondScreen from "./screens/SecondScreen";
import Location from "./screens/Location";
import Events from "./screens/Events";
import Officers from "./screens/Officers";


const App = createDrawerNavigator(
  {
    "Home": {
      path: '/:name',
      screen: Home
    },
    "Find Us": {
      path: '/',
      screen: Location
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
      screen: SecondScreen
    }
  },
  {
    initialRouteName: "Home",
    drawerPosition: 'left'

  }
);

export default App;