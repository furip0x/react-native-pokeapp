export interface IPokeList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokeListItem[];
}

export interface IPokeListItem {
  name: string;
  url: string;
}

// POKEMON DETAIL
export interface IPokeDetail {
  abilities: IPokeAbilities[];
  base_experience: number;
  name: string;
  moves: IPokeMoves[];
  stats: IPokeDetailStats[];
  types: IPokeTypes[];
  weight: number;
  sprites: {
    front_default: string;
    other: {'official-artwork': {front_default: string}};
  };
}

export interface IPokeDetailStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokeTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokeAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokeMoves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<{
    level_learned_at: number;
    // move_learn_method: {
    //   name: string;
    //   url: string;
    // };
    // version_group: {
    //   name: string;
    //   url: string;
    // };
  }>;
}
