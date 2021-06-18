import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const CardAnimation = () => {
  const BASE = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    //  transform: [{translateX: interpolate(BASE.value, [0, 1], [0, 200])}],
    left: interpolate(BASE.value, [0.2, 1.2], [0, 270]),
    opacity: interpolate(BASE.value, [0.2, 1.2], [0.1, 0.3, 0.1]),
  }));

  const cardAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(BASE.value, [0, 0.5, 1], [1, 1.2, 1.2])}],
  }));

  useEffect(() => {
    BASE.value = withRepeat(withTiming(3, {duration: 3000}), -1);
  }, []);

  return (
    <View style={styles.Container}>
      <Animated.View style={[styles.Card, cardAnimatedStyles]}>
        <LinearGradient
          angle={45}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.Type}>V I S A</Text>
        </LinearGradient>
        <Animated.View blurRadius={2} style={[styles.shine, animatedStyles]} />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    overflow: 'hidden',
    width: 250,
    height: 150,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
  shine: {
    height: '120%',
    top: -10,
    width: 20,
    backgroundColor: 'white',
    opacity: 0.4,
    position: 'absolute',
    transform: [{rotateZ: '20deg'}],
  },
  Type: {
    position: 'absolute',
    right: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    bottom: 20,
  },
});

export default CardAnimation;
