/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import COLORS from './styles/Colors';
import BGCOLOR from './styles/Background';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './navigators/MainTabNavigator';
import {ThemeProvider} from './context/ThemeContext';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wait = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(wait);
    };
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.dark9.color}
          />
          <MainTabNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: BGCOLOR.dark9.backgroundColor,
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: COLORS.white.color,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.dark5.color,
    paddingHorizontal: 16,
  },
  topFilterContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});

export default App;
