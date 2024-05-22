import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../styles/Colors';
import BGCOLOR from '../styles/Background';
import FONTS from '../styles/Fonts';
import {IPostCard} from '../constants/postCard';

// interface IProps {
//   userId?: number;
//   id?: number;
//   title: string;
//   body: string;
// }

const PostCard = ({title, body}: IPostCard) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        // styles.card,
      ]}>
      <View style={styles.card}>
        <Text style={[FONTS.h4, FONTS.bold, COLORS.white]}>{title}</Text>
        <Text style={[FONTS.bodyMedium, COLORS.gray]}>{body}</Text>
      </View>
    </Pressable>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: BGCOLOR.dark7.backgroundColor,
    borderWidth: 2,
    borderColor: COLORS.dark5.color,
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
});
