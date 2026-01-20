import PokedexTitle from "@/presentation/components/PokedexTitle";
import PokemonCard from "@/presentation/components/PokemonCard";
import { usePokemon } from "@/presentation/hooks/usePokemon";
import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { pokemons, isLoading } = usePokemon();
  const { top, bottom } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color="blue" size={30} />
      </View>
    );
  }

  return (
    <View
      className="flex-1 px-5"
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <PokedexTitle />
      <FlatList
        key="two-columns"
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ name }, index) => `${name}-${index + 1}`}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default HomeScreen;
