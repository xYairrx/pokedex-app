import PokemonCard from "@/presentation/components/PokemonCard";
import { usePokemon } from "@/presentation/hooks/usePokemon";
import React from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { pokemons } = usePokemon();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      className="flex-1 p-2"
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <FlatList
        key="two-columns"
        numColumns={2}
        columnWrapperStyle={{
          gap: 2,
          justifyContent: "space-evenly",
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ name }) => name}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default HomeScreen;
