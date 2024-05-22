import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import BGCOLOR from '../styles/Background';
import COLORS from '../styles/Colors';
import FONTS from '../styles/Fonts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import ThemeContext from '../context/ThemeContext';

interface IProps {
  name: string;
  url: string;
}

type StackParamList = {
  Home: {
    screen: string;
    params: {
      slug?: string;
    };
  };
};

export type StackNavigation = NativeStackNavigationProp<StackParamList>;

const PokeListCard = ({name}: IProps) => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigation>();
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            theme === 'dark'
              ? BGCOLOR.dark7.backgroundColor
              : BGCOLOR.light7.backgroundColor,
          borderColor:
            theme === 'dark' ? COLORS.dark5.color : COLORS.light5.color,
        },
      ]}>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
        ]}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'PokemonDetail',
            params: {slug: name},
          })
        }>
        <View>
          <Text
            style={[
              FONTS.h3,
              FONTS.bold,
              {
                color:
                  theme === 'dark' ? COLORS.white.color : COLORS.black.color,
              },
            ]}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <View
            style={[
              styles.button,
              {
                backgroundColor:
                  theme === 'dark'
                    ? BGCOLOR.dark5.backgroundColor
                    : BGCOLOR.light1.backgroundColor,
              },
            ]}>
            <Text
              style={
                (FONTS.bodyMedium,
                {
                  color:
                    theme === 'dark' ? COLORS.light5.color : COLORS.white.color,
                })
              }>
              {t('poke-list-card-link-title')}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PokeListCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    // ...Platform.select({
    //   ios: {
    //     shadowOffset: {width: 2, height: 2},
    //     shadowColor: COLORS.dark5.color,
    //     shadowOpacity: 1,
    //     shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 16,
    marginTop: 10,
  },
});
