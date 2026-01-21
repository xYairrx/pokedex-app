import React from "react";
import { Pressable, Text, View } from "react-native";
import { TypeTab } from "./PokemonDetailsBody";

interface PokemonTabs {
  activeTab: string;
  onTabChange: (tab: TypeTab) => void;
}

const PokemonTabs = ({ activeTab, onTabChange }: PokemonTabs) => {
  return (
    <View className="w-full flex-row justify-between ">
      <Pressable
        onPress={() => {
          onTabChange("about");
        }}
        className="active:opacity-75"
      >
        <Text
          className="text-lg"
          style={{
            color: activeTab === "about" ? "blue" : "gray",
          }}
        >
          About
        </Text>
        {activeTab === "about" && (
          <View className="h-[2px] w-full bg-blue-600" />
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          onTabChange("stats");
        }}
      >
        <Text
          className="text-lg"
          style={{
            color: activeTab === "stats" ? "blue" : "gray",
          }}
        >
          Stats
        </Text>
        {activeTab === "stats" && (
          <View className="h-[2px] w-full bg-blue-600" />
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          onTabChange("evolutions");
        }}
      >
        <Text
          className="text-lg"
          style={{
            color: activeTab === "evolutions" ? "blue" : "gray",
          }}
        >
          Evolutions
        </Text>
        {activeTab === "evolutions" && (
          <View className="h-[2px] w-full bg-blue-600" />
        )}
      </Pressable>
    </View>
  );
};

export default PokemonTabs;
