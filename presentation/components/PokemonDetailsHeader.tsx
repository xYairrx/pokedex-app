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
        <View className="items-center gap-6 ">
            <Text className="text-4xl font-extrabold capitalize text-white">
                {pokemon?.name}
            </Text>
            <View className="flex-row gap-4">
                <PokemonType slot={pokemon?.types ?? []} type="row" />
                <Text className="text-2xl text-white font-black">#{pokemon?.id}</Text>
            </View>
            <Image
                className="w-72 h-72 z-30 -bottom-10"
                source={{
                    uri: pokemon?.sprite,
                }}
            />

            <Image
                source={pokeball}
                className="opacity-10 absolute -bottom-12 z-10"
            />
        </View>
    );
};

export default PokemonDetailsHeader;
