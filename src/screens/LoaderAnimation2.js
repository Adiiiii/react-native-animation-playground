import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const LoaderAnimation2 = () => {
  const FIRST = useSharedValue(0);
  const SECOND = useSharedValue(0);
  const THIRD = useSharedValue(0);

  // in ms
  const ANIMATION_DURATION = 800;
  const circleOne = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [0, 1], [15, 60]),
  }));
  const circleTwo = useAnimatedStyle(() => ({
    width: interpolate(SECOND.value, [0, 1], [10, 40]),
  }));
  const circleThree = useAnimatedStyle(() => ({
    width: interpolate(THIRD.value, [0, 1], [5, 20]),
  }));

  useEffect(() => {
    FIRST.value = withRepeat(
      withTiming(1, {
        duration: ANIMATION_DURATION,
        easing: Easing.ease,
      }),
      -1,
      true,
    );
    SECOND.value = withDelay(
      200,
      withRepeat(
        withTiming(1, {
          duration: ANIMATION_DURATION,
          easing: Easing.ease,
        }),
        -1,
        true,
      ),
    );
    THIRD.value = withDelay(
      300,
      withRepeat(
        withTiming(1, {
          duration: ANIMATION_DURATION,
          easing: Easing.ease,
        }),
        -1,
        true,
      ),
    );
  }, [FIRST, SECOND, THIRD]);

  return (
    <View style={styles.Container}>
      <View style={styles.box}>
        <Animated.View style={[styles.Circle, styles.one, circleOne]} />
        <Animated.View style={[styles.Circle, styles.two, circleTwo]} />
        <Animated.View style={[styles.Circle, styles.three, circleThree]} />
      </View>
    </View>
  );
};
const MAROON = '#9d1d27';
const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: MAROON,
    justifyContent: 'space-evenly',
  },
  Circle: {
    width: 20,
    height: 15,
    backgroundColor: MAROON,
  },
  one: {},
  two: {},
  three: {},
});

export default LoaderAnimation2;
