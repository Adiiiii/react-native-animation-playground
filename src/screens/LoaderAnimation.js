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
import WrapperWithBackground from '../components/HOCs/WrapperWithBackground';

const LoaderAnimation = () => {
  const FIRST = useSharedValue(0);
  const SECOND = useSharedValue(0);
  const THIRD = useSharedValue(0);

  // in ms
  const ANIMATION_DURATION = 500;
  const circleOne = useAnimatedStyle(() => ({
    transform: [
      {translateY: interpolate(FIRST.value, [0, 1], [0, -50], 'clamp')},
    ],
  }));
  const circleTwo = useAnimatedStyle(() => ({
    transform: [
      {translateY: interpolate(SECOND.value, [0, 1], [0, -50], 'clamp')},
    ],
  }));
  const circleThree = useAnimatedStyle(() => ({
    transform: [
      {translateY: interpolate(THIRD.value, [0, 1], [0, -50], 'clamp')},
    ],
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
      150,
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
      <Animated.View style={[styles.Circle, styles.one, circleOne]} />
      <Animated.View style={[styles.Circle, styles.two, circleTwo]} />
      <Animated.View style={[styles.Circle, styles.three, circleThree]} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: 100,
    flex: 1,
    alignSelf: 'center',
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

export default WrapperWithBackground(LoaderAnimation);
