import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const HamburgerIcon = ({navigation}) => {
  const SHARED = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    height: interpolate(SHARED.value, [0, 1], [24, 15]),
  }));

  const openDrawer = () => {
    SHARED.value = withSequence(
      withTiming(1, {duration: 200}),
      withTiming(0, {duration: 200}),
    );
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPressOut={openDrawer}>
      <Animated.View style={[styles.wrapper, animatedStyles]}>
        <Animated.View style={styles.Bar} />
        <Animated.View style={styles.Bar} />
        <Animated.View style={styles.Bar} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 24,
    justifyContent: 'space-between',
  },
  Bar: {
    width: 20,
    height: 5,
    backgroundColor: 'black',
  },
});

export default HamburgerIcon;
