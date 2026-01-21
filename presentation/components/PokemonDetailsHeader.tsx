import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import React from "react";
import { Image, Text, View } from "react-native";
import PokemonType from "./PokemonType";

const pokeball = require("../../assets/images/pokeball.jpg");

interface PokemonDetailsHeaderProps {
  pokemon: Pokemon;
}

const PokemonDetailsHeader = ({ pokemon }: PokemonDetailsHeaderProps) => {
  return (
    <View className="items-center gap-4">
      <Text className="text-4xl font-extrabold capitalize text-white">
        {pokemon?.name}
      </Text>
      <View className="flex-row gap-4">
        <PokemonType slot={pokemon?.types ?? []} type="row" />
        <Text className="text-xl text-white font-black">#{pokemon?.id}</Text>
      </View>
      <Image
        className="w-48 h-48 z-30 -bottom-4"
        source={{
          uri: pokemon?.sprite,
        }}
      />

      <Image
        source={pokeball}
        className="opacity-10 absolute -bottom-10 z-10 w-60 h-60"
      />
    </View>
  );
};

export default PokemonDetailsHeader;
