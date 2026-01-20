import { Root } from "../interfaces/pokemon-detail-response.interface";
import { Result } from "../interfaces/pokemon-response.interaface";
import { Pokemon } from "../interfaces/pokemon.interface";

export class PokemonMapper {
  static fromResponseToPokemon = (pokemonResponse: Result): Pokemon => {
    return {
      name: pokemonResponse.name,
    };
  };

  static fromResponsePokemonDetail = (pokemonDetailResponse: Root): Pokemon => {
    return {
      id: pokemonDetailResponse.id,
      name: pokemonDetailResponse.name,
      sprite: pokemonDetailResponse.sprites.front_default,
      types: pokemonDetailResponse.types,
      height: pokemonDetailResponse.height,
      species: pokemonDetailResponse.species,
      weight: pokemonDetailResponse.weight,
    };
  };
}
