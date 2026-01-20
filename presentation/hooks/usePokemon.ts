import { getPokemonByName } from "@/core/services/pokemon/get-pokemon-by-name.service";
import { getPokemonList } from "@/core/services/pokemon/get-pokemon-list.service";
import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import { useEffect, useState } from "react";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPokemons = async () => {
    const data = await getPokemonList();

    if (!data) return;

    const pokemonsWithSpritesAndType = await Promise.all(
      data?.map(async (pokemon) => {
        const pokemonDetail = await getPokemonByName(pokemon.name);

        return {
          ...pokemon,
          sprite: pokemonDetail?.sprite || undefined,
          types: pokemonDetail?.types,
        };
      }),
    );
    setPokemons(pokemonsWithSpritesAndType);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return {
    pokemons,
    isLoading,
  };
};
