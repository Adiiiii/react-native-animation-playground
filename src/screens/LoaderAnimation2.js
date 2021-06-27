import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useCallback} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import WrapperWithBackground from '../components/HOCs/WrapperWithBackground';
const LoaderAnimation2 = () => {
  const FIRST = useSharedValue(-1);
  const {height, width} = Dimensions.get('window');
  const isFocused = useIsFocused();

  // in ms
  const ANIMATION_DURATION = 4000;
  const TRANSLATION_BASE_VALUE = -100;
  const TRANSLATION_DELTA = 30;
  const circleOne = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [0, 1], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [0, 1], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [0, 1],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE],
          'clamp',
        ),
      },
    ],
  }));
  const circleTwo = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [1, 2], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [1, 2], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [1, 2],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE + TRANSLATION_DELTA],
          'clamp',
        ),
      },
    ],
  }));
  const circleThree = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [2, 3], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [2, 3], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [2, 3],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE + 2 * TRANSLATION_DELTA],
          'clamp',
        ),
      },
    ],
  }));

  const circleFour = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [3, 4], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [3, 4], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [3, 4],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE + 3 * TRANSLATION_DELTA],
          'clamp',
        ),
      },
    ],
  }));

  const circleFive = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [4, 5], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [4, 5], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [4, 5],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE + 4 * TRANSLATION_DELTA],
          'clamp',
        ),
      },
    ],
  }));

  const circleSix = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [5, 6], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [5, 6], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [5, 6],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE + 5 * TRANSLATION_DELTA],
          'clamp',
        ),
      },
    ],
  }));

  const circleSeven = useAnimatedStyle(() => ({
    width: interpolate(FIRST.value, [6, 7], [width, 20], 'clamp'),
    height: interpolate(FIRST.value, [6, 7], [height, 20], 'clamp'),
    transform: [
      {
        translateX: interpolate(
          FIRST.value,
          [6, 7],
          // [6, 8],
          [0, TRANSLATION_BASE_VALUE + 6 * TRANSLATION_DELTA],
          'clamp',
        ),
      },
    ],
  }));

  // text

  const TextOne = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [0.9, 1], [0, 1]),
  }));
  const TextTwo = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [1.9, 2], [0, 1]),
  }));
  const TextThree = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [2.9, 3], [0, 1]),
  }));

  const TextFour = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [3.9, 4], [0, 1]),
  }));

  const TextFive = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [4.9, 5], [0, 1]),
  }));

  const TextSix = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [5.9, 6], [0, 1]),
  }));
  const TextSeven = useAnimatedStyle(() => ({
    opacity: interpolate(FIRST.value, [6.9, 7], [0, 1]),
  }));

  const animate = useCallback(
    target =>
      (FIRST.value = withTiming(target, {duration: ANIMATION_DURATION})),
    [FIRST],
  );

  useEffect(() => {
    if (isFocused) {
      animate(8);
    } else {
      FIRST.value = -1;
    }
  }, [FIRST, animate, isFocused]);

  return (
    <>
      <View style={styles.Container}>
        {/* <View style={styles.box}> */}
        <Animated.View style={[styles.Circle, styles.one, circleOne]}>
          <Animated.View style={TextOne}>
            <Text style={styles.letter}>L</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.Circle, styles.two, circleTwo]}>
          <Animated.View style={TextTwo}>
            <Text style={styles.letter}>O</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.Circle, styles.three, circleThree]}>
          <Animated.View style={TextThree}>
            <Text style={styles.letter}>A</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.Circle, styles.four, circleFour]}>
          <Animated.View style={TextFour}>
            <Text style={styles.letter}>D</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.Circle, styles.five, circleFive]}>
          <Animated.View style={TextFive}>
            <Text style={styles.letter}>I</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.Circle, styles.six, circleSix]}>
          <Animated.View style={TextSix}>
            <Text style={styles.letter}>N</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.Circle, styles.seven, circleSeven]}>
          <Animated.View style={TextSeven}>
            <Text style={styles.letter}>G</Text>
          </Animated.View>
        </Animated.View>
        {/* </View> */}
      </View>
    </>
  );
};
const COLOR6 = '#845EC2';
const COLOR2 = '#D65DB1';
const COLOR3 = '#FF6F91';
const COLOR4 = '#FF9671';
const COLOR5 = '#FFC75F';
const COLOR1 = '#F9F871';
const COLOR7 = '#F9F871';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 20,
  },
  letter: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  one: {
    zIndex: 5,
    backgroundColor: COLOR1,
  },
  two: {
    zIndex: 4,
    backgroundColor: COLOR2,
  },
  three: {
    zIndex: 3,
    backgroundColor: COLOR3,
  },
  four: {
    zIndex: 2,
    backgroundColor: COLOR4,
  },
  five: {
    zIndex: 1,
    backgroundColor: COLOR5,
  },
  six: {
    zIndex: 0,
    backgroundColor: COLOR6,
  },
  seven: {
    zIndex: -1,
    backgroundColor: COLOR7,
  },
});

export default WrapperWithBackground(LoaderAnimation2);
