import { pokeApiURL } from "@/core/api/pokeapi";
import { Root } from "@/infraestructure/interfaces/pokemon-response.interaface";
import { PokemonMapper } from "@/infraestructure/mapper/pokemon.mapper";

export const getPokemonList = async () => {
  try {
    const { data } = await pokeApiURL.get<Root>("/pokemon?limit=200&offset=0");

    const pokemons = data.results.map(PokemonMapper.fromResponseToPokemon);

    return pokemons;
  } catch (error) {
    console.error(error);
  }
};
