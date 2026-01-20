import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import React from "react";
import { Text, View } from "react-native";

interface PokemonDetailsBodyProps {
    pokemon: Pokemon;
}

const PokemonDetailsBody = ({ pokemon }: PokemonDetailsBodyProps) => {
    return (
        <View className="rounded-t-3xl bg-white w-full h-full px-8 py-10 gap-4 z-20">
            <Text className="text-xl text-slate-400 font-normal">
                Height
                <Text className="text-slate-800 font-medium ">
                    {" "}
                    {pokemon.height} cm
                </Text>
            </Text>
            <Text className="text-xl text-slate-400 font-normal">
                Weight
                <Text className="text-slate-800 font-medium ">
                    {" "}
                    {pokemon.weight} kgs
                </Text>
            </Text>
            <Text className="text-xl text-slate-400 font-normal">Abilities</Text>
        </View>
    );
};

export default PokemonDetailsBody;
