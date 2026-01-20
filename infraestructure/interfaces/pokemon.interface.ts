export interface Pokemon {
  name: string;
  id?: number;
  sprite?: string;
  types?: TypeSlot[];
  species?: Species;
  height?: number;
  weight?: number;
}

export interface PokemonList {
  pokemons: Pokemon[];
}

export interface PokemonSprite {
  frontDefault: string;
}

export interface TypeSlot {
  slot: number;
  type: Type;
}

interface Type {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}
