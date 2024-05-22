import React, {useContext} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import BGCOLOR from '../styles/Background';
import COLORS from '../styles/Colors';
import FONTS from '../styles/Fonts';
import ThemeContext from '../context/ThemeContext';
import {useTranslation} from 'react-i18next';

interface IProps {
  isThemeModalVisible: boolean;
  setIsThemeModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeModal = ({isThemeModalVisible, setIsThemeModalVisible}: IProps) => {
  const systemTheme = useColorScheme();
  const {t} = useTranslation();
  const {theme, toggleTheme, useSystemTheme} = useContext(ThemeContext);

  return (
    <Modal
      style={styles.modalWrapper}
      animationType="slide"
      visible={isThemeModalVisible}
      statusBarTranslucent={true}
      transparent
      onRequestClose={() => setIsThemeModalVisible(false)}>
      <Pressable
        style={[
          styles.clickablePart,
          {
            backgroundColor:
              theme === 'dark'
                ? BGCOLOR.dark9.backgroundColor
                : BGCOLOR.light3.backgroundColor,
          },
        ]}
        onPress={() => setIsThemeModalVisible(false)}
      />
      <View
        style={[
          styles.modalCenter,
          {
            backgroundColor:
              theme === 'dark'
                ? BGCOLOR.dark5.backgroundColor
                : BGCOLOR.light9.backgroundColor,
          },
        ]}>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.7 : 1,
              backgroundColor:
                theme === 'dark'
                  ? BGCOLOR.dark4.backgroundColor
                  : BGCOLOR.light6.backgroundColor,
            },
            styles.textBox,
          ]}
          onPress={() => {
            toggleTheme('dark');
            setIsThemeModalVisible(false);
          }}>
          <Text
            style={[
              styles.modalText,
              {
                color:
                  theme === 'dark' ? COLORS.primary.color : COLORS.dark5.color,
              },
            ]}>
            {t('screens.settings.theme-modal.dark-theme.title')}
          </Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.7 : 1,
              backgroundColor:
                theme === 'dark'
                  ? BGCOLOR.dark4.backgroundColor
                  : BGCOLOR.light6.backgroundColor,
            },
            styles.textBox,
          ]}
          onPress={() => {
            toggleTheme('light');
            setIsThemeModalVisible(false);
          }}>
          <Text
            style={[
              styles.modalText,
              {
                color:
                  theme === 'light' ? COLORS.primary.color : COLORS.white.color,
              },
            ]}>
            {t('screens.settings.theme-modal.light-theme.title')}
          </Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.7 : 1,
              alignItems: 'center',
              backgroundColor:
                theme === 'dark'
                  ? BGCOLOR.dark4.backgroundColor
                  : BGCOLOR.light4.backgroundColor,
            },
            styles.textBox,
          ]}
          onPress={() => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useSystemTheme();
            setIsThemeModalVisible(false);
          }}>
          <Text
            style={[styles.modalText, theme === systemTheme && COLORS.primary]}>
            {t('screens.settings.theme-modal.system-theme.title')}
          </Text>
          <Text
            style={[
              styles.modalTextSmall,
              theme === systemTheme && COLORS.primary,
            ]}>
            {t('screens.settings.theme-modal.system-theme.title-2')}:{' '}
            {systemTheme}
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ThemeModal;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    height: '100%',
  },
  clickablePart: {
    height: 100,
    opacity: 0.5,
  },
  modalCenter: {
    flex: 1,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    ...FONTS.h5,
    ...FONTS.bold,
  },
  modalTextSmall: {
    ...COLORS.white,
    ...FONTS.h6,
    ...FONTS.bold,
  },
  textBox: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
