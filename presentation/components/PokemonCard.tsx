import { getBackgroundColor } from "@/config/helpers/getBackgroundColor";
import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";
import PokemonType from "./PokemonType";

const pokeball = require("../../assets/images/pokeball.jpg");

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Pressable
      className="relative mb-4 h-44 rounded-3xl w-[48%] px-4 py-5 active:opacity-85 gap-2 overflow-hidden"
      style={{ backgroundColor: getBackgroundColor(pokemon) }}
      onPress={() => router.push(`/pokemon/${pokemon.name}`)}
    >
      <Text className="text-2xl font-bold text-slate-100 capitalize">
        {pokemon.name}
      </Text>

      <PokemonType slot={pokemon.types ?? []} type="column" />

      <Image
        className="w-28 h-28 absolute right-0 bottom-0 z-20"
        source={{
          uri: pokemon.sprite,
        }}
      />

      <Image
        source={pokeball}
        className="opacity-10 absolute -right-2 -bottom-2 w-32 h-32  z-10 "
      />
    </Pressable>
  );
};

export default PokemonCard;
