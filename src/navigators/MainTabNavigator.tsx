import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import BGCOLOR from '../styles/Background';
import TabBar from '../components/TabBar';
import COLORS from '../styles/Colors';
import FONTS from '../styles/Fonts';
import AboutStack from './AboutStack';
import SettingsStack from './SettingsStack';
import {useTranslation} from 'react-i18next';
import ThemeContext from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            theme === 'dark'
              ? BGCOLOR.dark9.backgroundColor
              : BGCOLOR.light9.backgroundColor,
          shadowColor: COLORS.gray.color,
        },
        headerTitleStyle: {
          ...FONTS.labelMedium,
          ...FONTS.bold,
          color: theme === 'dark' ? COLORS.white.color : COLORS.dark9.color,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerTitle: t('screens.home.title')}}
      />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{headerTitle: t('screens.about.title')}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{headerTitle: t('screens.settings.title')}}
      />
    </Tab.Navigator>
  );
}
