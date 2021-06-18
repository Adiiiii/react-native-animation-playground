import React from 'react';
import {View, StyleSheet} from 'react-native';
import HamburgerIcon from '../hamburgerIcon/HamburgerIcon';
const NavHeader = ({navigation}) => (
  <View style={styles.Wrapper}>
    <HamburgerIcon navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  Wrapper: {
    paddingLeft: 20,
  },
});
export default NavHeader;
