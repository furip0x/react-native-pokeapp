import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Container from '../../components/Container';
import PokemonCard from '../../components/PokemonCard';
import {IPokeDetail} from '../../constants/api/pokeApi';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import BGCOLOR from '../../styles/Background';
import COLORS from '../../styles/Colors';
import {API_URL} from '@env';
import ThemeContext from '../../context/ThemeContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  PokemonDetail: {slug: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonDetail'>;

const PokemonDetailScreen = ({route}: Props) => {
  const {slug} = route.params;
  const [pokemonDetail, setPokemonDetail] = useState<IPokeDetail>();
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const tabBarHeight = useBottomTabBarHeight();
  const {theme} = useContext(ThemeContext);

  const fetchPokemon = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/pokemon/${id}`);
      const data: IPokeDetail = await response.json();
      setPokemonDetail(data);
      setIsLoading(false);
      setIsError('');
    } catch (err) {
      console.log('Error fetching data:', err);
      setIsLoading(false);
      setIsError('Failed to fetch post list.');
    }
  };

  useEffect(() => {
    fetchPokemon(slug);
  }, [slug]);

  if (isLoading) {
    return (
      <View
        style={[
          styles.loader,
          {
            backgroundColor:
              theme === 'dark'
                ? BGCOLOR.dark9.backgroundColor
                : BGCOLOR.white.backgroundColor,
          },
        ]}>
        <ActivityIndicator size="large" color={COLORS.primary.color} />
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === 'dark'
            ? BGCOLOR.dark9.backgroundColor
            : BGCOLOR.white.backgroundColor,
      }}>
      <Container style={[styles.container, {paddingBottom: tabBarHeight}]}>
        <PokemonCard
          name={pokemonDetail?.name || '-'}
          image={
            pokemonDetail?.sprites?.other['official-artwork'].front_default ||
            ''
          }
          types={pokemonDetail?.types || []}
          hp={pokemonDetail?.stats?.[0].base_stat || 0}
          abilities={pokemonDetail?.abilities || []}
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   marginTop: 20,
  // },
  container: {
    marginTop: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonDetailScreen;
