import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const Home = () => {
  const SHARED = useSharedValue(0);
  const circleOne = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(SHARED.value, [0, 1], [1, 3], 'clamp')}],
  }));
  const circleTwo = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(SHARED.value, [1, 2], [1, 3], 'clamp')}],
  }));
  const circleThree = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(SHARED.value, [2, 3], [1, 3], 'clamp')}],
  }));

  useEffect(() => {
    SHARED.value = withRepeat(
      withSequence(
        withTiming(1, {duration: 1000, easing: Easing.ease}),
        withTiming(2, {duration: 1000, easing: Easing.ease}),
        withTiming(3, {duration: 1000, easing: Easing.ease}),
        withTiming(0, {duration: 1000, easing: Easing.ease}),
      ),
      -1,
      true,
    );
  }, []);

  return (
    <View style={styles.Container}>
      <Animated.View style={[styles.Circle, styles.one, circleOne]} />
      <Animated.View style={[styles.Circle, styles.two, circleTwo]} />
      <Animated.View style={[styles.Circle, styles.three, circleThree]} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 70,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  one: {
    backgroundColor: '#af1111',
  },
  two: {
    backgroundColor: '#afaaff',
  },
  three: {
    backgroundColor: '#aa1166',
  },
});

export default Home;
