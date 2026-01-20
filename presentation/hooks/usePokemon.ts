import { getPokemonList } from "@/core/services/pokemon/get-pokemon-list.service";
import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import { useEffect, useState } from "react";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async () => {
    const data = await getPokemonList();

    if (data) {
      setPokemons(data);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return {
    pokemons,
  };
};
