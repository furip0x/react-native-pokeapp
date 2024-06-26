import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface IProps {
  size?: number;
  color?: string;
  opacity?: number;
}

const Pokeballrotated = ({size, color, opacity}: IProps) => {
  return (
    <Svg
      width={size}
      height={size}
      opacity={opacity}
      viewBox="0 0 100 100"
      fill="none">
      <Path
        fill={color}
        d="M82.5,17.5c-18-18-47.1-18-65,0s-18,47.1,0,65s47.1,18,65,0S100.4,35.5,82.5,17.5z M40.5,40.6c5.2-5.2,13.7-5.2,18.9,0  s5.2,13.7,0,18.9s-13.7,5.2-18.9,0S35.3,45.8,40.5,40.6z M77.6,77.7c-15.3,15.3-40,15.3-55.3,0l13.8-13.8c7.6,7.6,20,7.6,27.6,0  s7.6-20,0-27.6l13.9-13.9C92.9,37.7,92.9,62.4,77.6,77.7z"
      />
    </Svg>
  );
};

export default Pokeballrotated;
