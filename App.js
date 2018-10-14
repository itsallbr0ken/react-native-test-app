import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Home from "./screens/Home";
import SecondScreen from "./screens/SecondScreen";
import About from "./screens/About";


const App = createDrawerNavigator(
  {
    "Home": {
      path: '/:name',
      screen: Home
    },
    "About Us": {
      path: '/',
      screen: About
    },
    "Latest Information": {
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