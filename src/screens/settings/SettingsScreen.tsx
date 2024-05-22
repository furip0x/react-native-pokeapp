import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import Container from '../../components/Container';
import FONTS from '../../styles/Fonts';
import COLORS from '../../styles/Colors';
import BGCOLOR from '../../styles/Background';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import LangModal from '../../components/LangModal';
import ThemeModal from '../../components/ThemeModal';
import ThemeContext from '../../context/ThemeContext';

const SettingsScreen = () => {
  const {t} = useTranslation();
  const tabBarHeight = useBottomTabBarHeight();
  const [isLangModalVisible, setisLangModalVisible] = useState(false);
  const [isThemeModalVisible, setIsThemeModalVisible] = useState(false);
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <ScrollView
        style={{
          paddingBottom: tabBarHeight,
          backgroundColor:
            theme === 'dark'
              ? BGCOLOR.dark9.backgroundColor
              : BGCOLOR.white.backgroundColor,
        }}>
        <Container style={styles.container}>
          <Pressable
            style={({pressed}) => [
              {
                opacity: pressed ? 0.7 : 1,
                borderBottomColor:
                  theme === 'dark' ? COLORS.dark6.color : COLORS.light6.color,
              },
              styles.optionItem,
            ]}
            onTouchEnd={() => setisLangModalVisible(true)}>
            <Text
              style={[
                styles.optionItemText,
                {
                  color:
                    theme === 'dark' ? COLORS.white.color : COLORS.dark9.color,
                },
              ]}>
              {t('screens.settings.options.option-1.title')}
            </Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {
                opacity: pressed ? 0.7 : 1,
                borderBottomColor:
                  theme === 'dark' ? COLORS.dark6.color : COLORS.light6.color,
              },
              styles.optionItem,
            ]}
            onTouchEnd={() => setIsThemeModalVisible(true)}>
            <Text
              style={[
                styles.optionItemText,
                {
                  color:
                    theme === 'dark' ? COLORS.white.color : COLORS.dark9.color,
                },
              ]}>
              {t('screens.settings.options.option-2.title')}
            </Text>
          </Pressable>
        </Container>
      </ScrollView>
      <LangModal
        isLangModalVisible={isLangModalVisible}
        setisLangModalVisible={setisLangModalVisible}
      />
      <ThemeModal
        isThemeModalVisible={isThemeModalVisible}
        setIsThemeModalVisible={setIsThemeModalVisible}
      />
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  optionItem: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 5,
  },
  optionItemText: {
    ...FONTS.bodySmall,
    ...FONTS.bold,
  },
});
