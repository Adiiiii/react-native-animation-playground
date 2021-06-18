/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {
  CardAnimationStack,
  LoaderAnimation2Stack,
  LoaderAnimationStack,
} from './navigation/Navigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{paddingTop: 20}}
        drawerType="back"
        detachInactiveScreens>
        <Drawer.Screen name="Bouncy Loader" component={LoaderAnimationStack} />
        <Drawer.Screen name="Boring Loader" component={LoaderAnimation2Stack} />
        <Drawer.Screen name="Card Animation" component={CardAnimationStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
