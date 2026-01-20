import { pokemonTypeColor } from "@/constants/PokemonTypeByColor";
import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";

export const getBackgroundColor = (pokemon: Pokemon | undefined) => {
  if (!pokemon) {
    return "#9099A1";
  }

  const primaryType = pokemon.types?.[0]?.type.name;

  return primaryType ? pokemonTypeColor[primaryType] || "#9099A1" : "#9099A1";
};
