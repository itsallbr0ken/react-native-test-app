import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Home from "./screens/Home2";
import Events from "./screens/Events";
import Officers from "./screens/Officers";
import Links from "./screens/UsefulLinksAjax";



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
    }
  },
  {
    initialRouteName: "Home",
    drawerPosition: 'left'

  }
);

export default App;