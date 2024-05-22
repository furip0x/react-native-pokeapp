import {ImageProps} from 'react-native';

export interface IPokemonCard {
  id: number;
  name: string;
  image: ImageProps;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

export const pokemonCardData: IPokemonCard[] = [
  {
    id: 1,
    name: 'Charmander',
    image: require('../assets/img/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  },
  {
    id: 2,
    name: 'Squirtle',
    image: require('../assets/img/squirtle.png'), // Replace with the actual image path
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  },
  {
    id: 3,
    name: 'Bulbasaur',
    image: require('../assets/img/bulbasaur.png'), // Replace with the actual image path
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
  {
    id: 4,
    name: 'Pikachu',
    image: require('../assets/img/pikachu.png'), // Replace with the actual image path
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  },
];
