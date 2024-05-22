import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Container from '../../components/Container';
import FONTS from '../../styles/Fonts';
import COLORS from '../../styles/Colors';
import BGCOLOR from '../../styles/Background';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Pokeapilogo from '../../components/Icons/Pokeapilogo';
import {useTranslation} from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';

const AboutScreen = () => {
  const {t} = useTranslation();
  const tabBarHeight = useBottomTabBarHeight();
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView
      style={{
        paddingBottom: tabBarHeight,
        backgroundColor:
          theme === 'dark'
            ? BGCOLOR.dark9.backgroundColor
            : BGCOLOR.white.backgroundColor,
      }}>
      <Container style={styles.container}>
        <Text
          style={[
            styles.title,
            {
              color:
                theme === 'dark' ? COLORS.light5.color : COLORS.dark5.color,
            },
          ]}>
          PokeFinder
        </Text>
        <View style={styles.logoContainer}>
          <Text
            style={[
              styles.title,
              {
                color:
                  theme === 'dark' ? COLORS.light5.color : COLORS.dark5.color,
              },
            ]}>
            {t('screens.about.content.title-1')}
          </Text>
          <Pokeapilogo />
        </View>
        <View>
          <Text
            style={[
              styles.title,
              {
                color:
                  theme === 'dark' ? COLORS.light5.color : COLORS.dark5.color,
              },
            ]}>
            {t('screens.about.content.title-2')}
          </Text>
        </View>
      </Container>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  title: {
    ...FONTS.h1,
    ...FONTS.bold,
    textAlign: 'center',
  },
  container: {
    minHeight: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
