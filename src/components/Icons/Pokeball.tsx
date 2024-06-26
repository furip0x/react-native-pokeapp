import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

interface IProps {
  size?: number;
  color?: string;
  opacity?: number;
}

const Pokeball = ({size, color, opacity}: IProps) => {
  return (
    <Svg
      width={size}
      height={size}
      opacity={opacity}
      viewBox="0 0 100 100"
      fill="none">
      <Path
        fill={color}
        d="M66.6,48.8c-2,5.7-7.5,9.8-13.9,9.8s-11.8-4.1-13.9-9.8c-10.9,1.6-21.7,5-32,10.4c4.3,19.9,22,34.9,43.2,34.9  c22.1,0,40.3-16.2,43.6-37.3C84.8,52.8,75.8,50.2,66.6,48.8z"
      />
      <Path
        fill={color}
        d="M52.8,29.1c6.6,0,12.2,4.3,14.1,10.3c9.2,1.2,18.3,3.7,27.1,7.3C92.3,23.9,73.3,5.9,50,5.9C25.9,5.9,6.3,25.3,5.9,49.3  c10.6-5,21.6-8.3,32.8-9.8C40.6,33.5,46.2,29.1,52.8,29.1z"
      />
      <Circle fill={color} cx="52.8" cy="43.9" r="8.5" />
    </Svg>
  );
};

export default Pokeball;
