import React from "react";
import { Image, Text, View } from "react-native";

const pokeball = require("../../assets/images/pokeball.jpg");

const PokedexTitle = () => {
    return (
        <View className="flex-row justify-between py-16">
            <Text className="text-4xl font-black">Pokedex</Text>

            <Image
                source={pokeball}
                className="opacity-5 absolute -right-32 -top-28"
            />
        </View>
    );
};

export default PokedexTitle;
