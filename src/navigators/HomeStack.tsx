import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import PokemonDetailScreen from '../screens/pokemonDetail/PokemonDetailScreen';
import HeaderGoBackBtn from '../components/HeaderGoBackBtn';
import BGCOLOR from '../styles/Background';
import FONTS from '../styles/Fonts';
import COLORS from '../styles/Colors';
import {useTranslation} from 'react-i18next';
import ThemeContext from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarStyle: {display: 'none'},
        headerStyle: {
          backgroundColor:
            theme === 'dark'
              ? BGCOLOR.dark9.backgroundColor
              : BGCOLOR.light9.backgroundColor,
        },
        headerTitleStyle: {
          ...FONTS.labelMedium,
          ...FONTS.bold,
          color: theme === 'dark' ? COLORS.white.color : COLORS.dark9.color,
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
        options={({navigation}) => ({
          headerShadowVisible: false,
          headerTitle: t('screens.home.subscreens.pokemondetail.title'),
          headerLeft: () => (
            <HeaderGoBackBtn onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
