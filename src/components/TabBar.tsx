import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  NavigationState,
  Descriptor,
  ParamListBase,
  NavigationHelpers,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import BGCOLOR from '../styles/Background';
import COLORS from '../styles/Colors';
import Icon from './Icons';
import FONTS from '../styles/Fonts';
import {useTranslation} from 'react-i18next';
import ThemeContext from '../context/ThemeContext';

interface TabBarProps {
  state: NavigationState<ParamListBase>;
  descriptors: {
    [key: string]: Descriptor<
      any,
      NavigationProp<ParamListBase>,
      RouteProp<ParamListBase>
    >;
  };
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

function TabBar({state, descriptors, navigation}: TabBarProps) {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme === 'dark'
              ? BGCOLOR.dark9.backgroundColor
              : BGCOLOR.light9.backgroundColor,
          borderTopColor:
            theme === 'dark' ? COLORS.dark6.color : COLORS.light6.color,
        },
      ]}>
      {state.routes.map((route, index: number) => {
        const descriptor = descriptors[route.key];

        if (!descriptor) {
          // Handle the case where descriptor is not found.
          return null;
        }

        const {options} = descriptor;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index + label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.buttonItem}>
            {
              <Icon
                name={
                  label === 'Home'
                    ? 'Pokeball'
                    : label === 'About'
                    ? 'Pokeballrotated'
                    : 'Pokegreatball'
                }
                color={
                  theme === 'dark' ? COLORS.white.color : COLORS.dark9.color
                }
                opacity={isFocused ? 1 : 0.3}
              />
            }
            <Text
              style={[
                FONTS.labelMedium,
                {opacity: isFocused ? 1 : 0.3},
                {
                  color:
                    theme === 'dark' ? COLORS.white.color : COLORS.dark9.color,
                },
              ]}>
              {label === 'Home' && t('screens.home.title')}
              {label === 'PokemonDetail' &&
                t('screens.home.subscreens.pokemondetail.title')}
              {label === 'About' && t('screens.about.title')}
              {label === 'Settings' && t('screens.settings.title')}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    justifyContent: 'space-between',
  },
  buttonItem: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TabBar;
