import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, tr} from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager, Platform, Settings} from 'react-native';

export const resources = {
  en: {translation: en},
  tr: {translation: tr},
};

function getLocale() {
  let currentLocale = 'en';

  if (Platform.OS === 'ios') {
    const settings = Settings.get('AppleLocale');
    const locale = settings.split('_')[0] || settings?.[0].split('_')[0];

    if (locale) {
      currentLocale = locale;
    }
  } else {
    const locale = I18nManager.getConstants().localeIdentifier;
    if (locale) {
      currentLocale = locale;
    }
  }

  return currentLocale;
}

interface ILanguageDetector {
  init?: () => void;
  type: 'languageDetector';
  async: true;
  detect: (callback: (lng: string) => void) => Promise<void>;
}

const languageDetector: ILanguageDetector = {
  //   init: Function.prototype,
  type: 'languageDetector',
  //   async: 'true',
  async: true,
  detect: async (callbak: any) => {
    const storeLanguage = await AsyncStorage.getItem('lng-key');
    const selectedLanguage = storeLanguage || getLocale();
    callbak(selectedLanguage);
  },
};

i18next.use(initReactI18next).use(languageDetector).init({
  debug: true,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources,
});

export default i18next;
