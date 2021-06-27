import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

const WrapperWithBackground =
  Component =>
  ({...props}) => {
    return (
      <LinearGradient
        colors={['white', '#dcc3f6', '#dcc3f6']}
        style={styles.Container}>
        <Component {...props} />
      </LinearGradient>
    );
  };
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WrapperWithBackground;
