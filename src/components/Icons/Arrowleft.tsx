import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface IProps {
  size?: number;
  color?: string;
  opacity?: number;
}

const Arrowleft = ({size, color, opacity}: IProps) => {
  return (
    <Svg
      width={size}
      height={size}
      opacity={opacity}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M5 12H19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 7L5 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 17L5 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Arrowleft;
