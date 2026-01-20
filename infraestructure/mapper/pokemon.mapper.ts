import { Result } from "../interfaces/pokemon-response.interaface";
import { Pokemon } from "../interfaces/pokemon.interface";

export class PokemonMapper {
  static fromResponseToPokemon = (pokemonResponse: Result): Pokemon => {
    return {
      name: pokemonResponse.name,
      url: pokemonResponse.url,
    };
  };
}
