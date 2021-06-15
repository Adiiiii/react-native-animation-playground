/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoaderAnimation from './screens/LoaderAnimation';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HamburgerIcon from './components/hamburgerIcon/HamburgerIcon';

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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{paddingTop: 50}}
        drawerType="back">
        <Drawer.Screen
          name="Loader Animation"
          component={LoaderAnimationStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
