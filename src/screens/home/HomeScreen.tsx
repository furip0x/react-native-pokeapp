import React, {useContext, useEffect, useState} from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {API_URL} from '@env';
import COLORS from '../../styles/Colors';
import Container from '../../components/Container';
import {IPokeListItem} from '../../constants/api/pokeApi';
import PokeListCard from '../../components/PokeListCard';
import BGCOLOR from '../../styles/Background';
import ThemeContext from '../../context/ThemeContext';
// import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

function HomeScreen(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<IPokeListItem[]>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const {theme} = useContext(ThemeContext);
  // const [searchText, setSearchText] = useState('');
  // const tabBarHeight = useBottomTabBarHeight();

  const fetchPokemon = async (limit = 50, offset = 0) => {
    try {
      const response = await fetch(
        `${API_URL}/pokemon?limit=${limit}&offset=${offset}`,
      );
      const data = await response.json();
      setPokemonList(data.results);
      setIsLoading(false);
      setError('');
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
      setError('Failed to fetch post list.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (isLoading) {
    return (
      <View
        style={[
          styles.pageWrapper,
          {
            paddingTop: 100,
            backgroundColor:
              theme === 'dark'
                ? BGCOLOR.dark9.backgroundColor
                : BGCOLOR.white.backgroundColor,
          },
          // {paddingBottom: tabBarHeight},
        ]}>
        <ActivityIndicator size="large" color={COLORS.primary.color} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.pageWrapper,
        {
          // paddingBottom: tabBarHeight,
          backgroundColor:
            theme === 'dark'
              ? BGCOLOR.dark9.backgroundColor
              : BGCOLOR.white.backgroundColor,
        },
      ]}>
      <Container>
        {/* <View style={styles.topFilterContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for a pokemon"
            placeholderTextColor={COLORS.gray.color}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View> */}

        <FlatList
          data={pokemonList}
          renderItem={({item, index}) => {
            return <PokeListCard key={index} {...item} />;
          }}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={ItemSeperator}
          ListEmptyComponent={
            <Text style={styles.listEmptyText}>No data found.</Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </View>
  );
}

const ItemSeperator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    minHeight: '100%',
    paddingTop: 20,
  },
  seperator: {
    marginBottom: 26,
  },
  listEmptyText: {
    textAlign: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: COLORS.white.color,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.dark5.color,
    paddingHorizontal: 16,
  },
  topFilterContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 25,
    textAlign: 'center',
    backgroundColor: COLORS.black.color,
  },
});

export default HomeScreen;
