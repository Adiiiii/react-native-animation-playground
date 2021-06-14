import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoaderAnimation from './screens/LoaderAnimation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Loader Animation" component={LoaderAnimation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
