import { getPokemonByName } from "@/core/services/pokemon/get-pokemon-by-name.service";
import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import { useEffect, useState } from "react";

export const usePokemonDetails = (name: string) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchPokemonDetails = async () => {
        const pokemon = await getPokemonByName(name);

        console.log(pokemon);

        if (!pokemon) return;

        setPokemon(pokemon);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    return {
        pokemon,
        isLoading,
    };
};
