import React from 'react';
<SafeAreaView />;
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {MountainView} from '../../assets';
const HamburgerMenu = ({navigation}) => (
  <View style={styles.wrapper}>
    <ImageBackground blurRadius={10} style={styles.image} source={MountainView}>
      <SafeAreaView>
        <Text
          onPress={() => navigation.navigate('Bouncy Loader')}
          style={styles.link}>
          Basic Loader
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            '#351556',
            '#351556',
            '#351556',
            'transparent',
            'transparent',
          ]}
          style={styles.line}
        />
        <Text
          onPress={() => navigation.navigate('Headache Infusing Loader')}
          style={styles.link}>
          Dont use Loader
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            '#351556',
            '#351556',
            '#351556',
            'transparent',
            'transparent',
          ]}
          style={styles.line}
        />
        <Text
          onPress={() => navigation.navigate('Card Animation')}
          style={styles.link}>
          Card transitions
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            '#351556',
            '#351556',
            '#351556',
            'transparent',
            'transparent',
          ]}
          style={styles.line}
        />
      </SafeAreaView>
    </ImageBackground>
  </View>
);
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'repeat',
    paddingLeft: 30,
    paddingTop: 80,
  },
  link: {
    fontWeight: 'bold',
    color: '#351556',
    fontSize: 18,
    letterSpacing: 2,
  },
  line: {
    width: '100%',
    height: 2,
    marginBottom: 40,
    borderRadius: 10,
  },
});

export default HamburgerMenu;
