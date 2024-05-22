import React, {useContext} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import {resources} from '../i18n/i18n.config';
import BGCOLOR from '../styles/Background';
import COLORS from '../styles/Colors';
import FONTS from '../styles/Fonts';
import ThemeContext from '../context/ThemeContext';

interface IProps {
  isLangModalVisible: boolean;
  setisLangModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LangModal = ({isLangModalVisible, setisLangModalVisible}: IProps) => {
  const currentLang = i18next.languages[0].split('_')[0];
  const {theme} = useContext(ThemeContext);

  const storeLang = async (value: string) => {
    try {
      await AsyncStorage.setItem('lng-key', value);
    } catch (e) {
      // saving error
    }
  };

  const handleLangChange = (lang: string) => {
    storeLang(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <Modal
      style={styles.langModal}
      animationType="slide"
      visible={isLangModalVisible}
      statusBarTranslucent={true}
      transparent
      onRequestClose={() => setisLangModalVisible(false)}>
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
        onPress={() => setisLangModalVisible(false)}
      />
      <View
        style={[
          styles.langModalCenter,
          {
            backgroundColor:
              theme === 'dark'
                ? BGCOLOR.dark5.backgroundColor
                : BGCOLOR.light9.backgroundColor,
          },
        ]}>
        {Object.keys(resources).map(lang => (
          <Pressable
            key={lang}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}
            onPress={() => {
              handleLangChange(lang);
              setisLangModalVisible(false);
            }}>
            <Text
              style={[
                styles.langModalText,
                {
                  color:
                    theme === 'dark' ? COLORS.light3.color : COLORS.dark9.color,
                },
                lang.toLowerCase() === currentLang.toLowerCase() &&
                  COLORS.primary,
              ]}>
              {lang.toUpperCase()}
            </Text>
          </Pressable>
        ))}
      </View>
    </Modal>
  );
};

export default LangModal;

const styles = StyleSheet.create({
  langModal: {
    flex: 1,
    height: '100%',
  },
  clickablePart: {
    height: 100,
    opacity: 0.5,
  },
  langModalCenter: {
    flex: 1,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  langModalText: {
    ...FONTS.h2,
    ...FONTS.bold,
  },
});
