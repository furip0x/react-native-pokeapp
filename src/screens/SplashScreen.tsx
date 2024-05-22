import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import COLORS from '../styles/Colors';
import FONTS from '../styles/Fonts';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LottieView
          style={{width: width - (width * 20) / 100, flex: 1}}
          source={require('../constants/logo-animation.json')}
          autoPlay
          loop
        />
        <Text style={[COLORS.light3, FONTS.bodySmall, styles.copyright]}>
          <Text style={[COLORS.white, FONTS.bold]}>PokeFinder</Text>, A React
          Native App
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black.color,
    flex: 1,
    alignItems: 'center',
  },
  copyright: {
    textAlign: 'center',
  },
});
