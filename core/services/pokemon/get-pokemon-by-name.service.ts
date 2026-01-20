import { pokeApiURL } from "@/core/api/pokeapi";
import { Root } from "@/infraestructure/interfaces/pokemon-detail-response.interface";
import { PokemonMapper } from "@/infraestructure/mapper/pokemon.mapper";

export const getPokemonByName = async (name: string) => {
  try {
    const { data } = await pokeApiURL.get<Root>(`/pokemon/${name}`);

    const pokemonDetail = PokemonMapper.fromResponsePokemonDetail(data);

    return pokemonDetail;
  } catch (error) {
    console.error(error);
  }
};
