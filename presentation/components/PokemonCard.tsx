import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import React from "react";
import { Pressable, Text } from "react-native";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Pressable
      className="bg-green-400 mb-2 h-44 rounded-[18px] w-[160px] p-4 active:opacity-85"
      onPress={() => console.log(`click en ${pokemon.name}`)}
    >
      <Text className="text-xl font-medium text-slate-100">{pokemon.name}</Text>
    </Pressable>
  );
};

export default PokemonCard;
