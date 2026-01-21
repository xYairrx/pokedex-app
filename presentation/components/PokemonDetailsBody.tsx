import { Pokemon } from "@/infraestructure/interfaces/pokemon.interface";
import React, { useState } from "react";
import { View } from "react-native";
import PokemonAbout from "./PokemonAbout";
import PokemonEvolution from "./PokemonEvolution";
import PokemonStats from "./PokemonStats";
import PokemonTabs from "./PokemonTabs";

interface PokemonDetailsBodyProps {
  pokemon: Pokemon;
}

export type TypeTab = "about" | "stats" | "evolutions";

const PokemonDetailsBody = ({ pokemon }: PokemonDetailsBodyProps) => {
  const [activeTab, setActiveTab] = useState<TypeTab>("about");

  const changeTab = (newTab: TypeTab) => {
    setActiveTab(newTab);
  };

  return (
    <View className="rounded-t-3xl bg-white w-full h-full px-8 py-10 gap-4 z-20">
      <PokemonTabs activeTab={activeTab} onTabChange={changeTab} />

      {activeTab === "about" && <PokemonAbout />}
      {activeTab === "stats" && <PokemonStats />}
      {activeTab === "evolutions" && <PokemonEvolution />}
    </View>
  );
};

export default PokemonDetailsBody;
