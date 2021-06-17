/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoaderAnimation from './screens/LoaderAnimation';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HamburgerIcon from './components/hamburgerIcon/HamburgerIcon';
import LoaderAnimation2 from './screens/LoaderAnimation2';
import CardAnimation from './screens/CardAnimation';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const LoaderAnimationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => (
          <View style={{paddingLeft: 20}}>
            <HamburgerIcon navigation={navigation} />
          </View>
        ),
        headerTransparent: true,
      })}
      name="Loader Animation"
      component={LoaderAnimation}
    />
  </Stack.Navigator>
);

const CardAnimationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => (
          <View style={{paddingLeft: 20}}>
            <HamburgerIcon navigation={navigation} />
          </View>
        ),
        headerTransparent: true,
      })}
      name="Card"
      component={CardAnimation}
    />
  </Stack.Navigator>
);
const LoaderAnimation2Stack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => (
          <View style={{paddingLeft: 20}}>
            <HamburgerIcon navigation={navigation} />
          </View>
        ),
        headerTransparent: true,
      })}
      name="Another Loader"
      component={LoaderAnimation2}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{paddingTop: 20}}
        drawerType="back"
        detachInactiveScreens>
        <Drawer.Screen name="Loader 1" component={LoaderAnimationStack} />
        <Drawer.Screen name="Loader 2" component={LoaderAnimation2Stack} />
        <Drawer.Screen name="Card" component={CardAnimationStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
