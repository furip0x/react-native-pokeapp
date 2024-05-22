import React, {useContext} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import COLORS from '../styles/Colors';
import BGCOLOR from '../styles/Background';
import FONTS from '../styles/Fonts';
import {IPokeAbilities, IPokeTypes} from '../constants/api/pokeApi';
import ThemeContext from '../context/ThemeContext';

type IProps = {
  name: string;
  image: string;
  types: IPokeTypes[];
  hp: number;
  abilities: IPokeAbilities[];
};

const PokemonCard = ({name, image, types, hp, abilities}: IProps) => {
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
      <View style={styles.nameContainer}>
        <Text
          style={[
            FONTS.h3,
            FONTS.bold,
            styles.name,
            {color: theme === 'dark' ? COLORS.white.color : COLORS.black.color},
          ]}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <Text
          style={[
            FONTS.bodyMedium,
            FONTS.bold,
            {color: theme === 'dark' ? COLORS.white.color : COLORS.black.color},
          ]}>
          <Text style={[COLORS.danger]}>❤ </Text>
          {hp}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={{uri: image}}
        accessibilityLabel={`${name} pokemon`}
      />
      <View style={[styles.typeContainer]}>
        {types.map((type, index) => (
          <View key={index} style={[styles.badge]}>
            {/* <Text style={[FONTS.h4, styles.typeEmoji]}>{emoji}</Text> */}
            <Text
              key={index}
              style={[
                FONTS.h4,
                styles.typeText,
                {
                  color:
                    theme === 'dark' ? COLORS.white.color : COLORS.black.color,
                },
              ]}>
              {type.type.name}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.abilitiesContainer}>
        <View style={styles.abilitiesList}>
          <Text
            style={[
              FONTS.bodyxLarge,
              FONTS.bold,
              {
                color:
                  theme === 'dark' ? COLORS.white.color : COLORS.black.color,
              },
            ]}>
            {abilities
              .map(({ability}) => ability.name.replace('-', ' '))
              .join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: COLORS.dark5.color,
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 36,
  },
  name: {},
  hpHearth: {
    paddingRight: 5,
    marginRight: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 30,
  },
  abilitiesContainer: {
    gap: 10,
  },
  abilitiesList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    marginRight: 12,
  },
  typeText: {
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: 8,
  },
});
