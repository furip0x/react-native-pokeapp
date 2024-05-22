import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import Icon from './Icons';
import COLORS from '../styles/Colors';
import ThemeContext from '../context/ThemeContext';

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
}

const HeaderGoBackBtn = ({onPress}: IProps) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
            ...styles.button,
          },
        ]}
        onPress={onPress}>
        <Icon
          name="arrowleft"
          color={theme === 'dark' ? COLORS.white.color : COLORS.black.color}
        />
      </Pressable>
    </View>
  );
};

export default HeaderGoBackBtn;

const styles = StyleSheet.create({
  button: {
    flexShrink: 0,
  },
});
