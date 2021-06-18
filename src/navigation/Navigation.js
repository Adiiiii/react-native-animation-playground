import React from 'react';
import LoaderAnimation from '../screens/LoaderAnimation';
import {createStackNavigator} from '@react-navigation/stack';
import LoaderAnimation2 from '../screens/LoaderAnimation2';
import CardAnimation from '../screens/CardAnimation';
import NavHeader from '../components/navHeader/navHeader';

const Stack = createStackNavigator();

export const LoaderAnimationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation, route}) => ({
        headerLeft: () => <NavHeader navigation={navigation} />,
        headerTransparent: true,
        headerTitleAlign: 'center',
      })}
      name="Loader Animation"
      component={LoaderAnimation}
    />
  </Stack.Navigator>
);

export const CardAnimationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => <NavHeader navigation={navigation} />,
        headerTransparent: true,
        headerTitleAlign: 'center',
      })}
      name="Card"
      component={CardAnimation}
    />
  </Stack.Navigator>
);
export const LoaderAnimation2Stack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => <NavHeader navigation={navigation} />,
        headerTransparent: true,
        headerTitleAlign: 'center',
      })}
      name="Another Loader"
      component={LoaderAnimation2}
    />
  </Stack.Navigator>
);
