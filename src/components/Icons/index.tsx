import React from 'react';
import Pokeball from './Pokeball';
import PokeBallRotated from './Pokeballrotated';
import Pokegreatball from './Pokegreatball';
import Arrowleft from './Arrowleft';

interface IProps {
  name: string;
  color?: string;
  size?: number;
  opacity?: number;
}

const Icon = ({name, color = 'white', size = 24, opacity = 1}: IProps) => {
  switch (name?.toLowerCase()) {
    case 'pokeball':
      return <Pokeball size={size} color={color} opacity={opacity} />;
    case 'pokeballrotated':
      return <PokeBallRotated size={size} color={color} opacity={opacity} />;
    case 'pokegreatball':
      return <Pokegreatball size={size} color={color} opacity={opacity} />;
    case 'arrowleft':
      return <Arrowleft size={size} color={color} opacity={opacity} />;
  }
};
export default Icon;
