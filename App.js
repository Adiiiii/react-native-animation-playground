import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;

function App() {
  const opacity = useSharedValue(1);
  const BOX_WIDTH = useSharedValue(50);
  const BOX_HEIGHT = useSharedValue(50);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // flex: opacity.value,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Text style={styles.Letter}>F</Text>
      </Animated.View>
      <Text
        style={styles.FixedButton}
        onPress={() => {
          opacity.value = Animated.withRepeat(
            Animated.withTiming(0, {
              duration: 2000,
            },),
            -1,
            true,
          );
        }}
        title="Move">
        lo
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  box: {
    // width: 50,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  Letter: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  FixedButton: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#ff7744',
    width: 50,
    borderWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default App;

// offset.value = withSpring(Math.random());
