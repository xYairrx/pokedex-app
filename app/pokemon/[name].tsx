import { getBackgroundColor } from "@/config/helpers/getBackgroundColor";
import PokemonDetailsBody from "@/presentation/components/PokemonDetailsBody";
import PokemonDetailsHeader from "@/presentation/components/PokemonDetailsHeader";
import { usePokemonDetails } from "@/presentation/hooks/usePokemonDetails";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useRef } from "react";
import { Pressable, View } from "react-native";

const PokemonDetails = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["50%", "80%", "90%"], []);

    const handleClose = () => {
        router.back();
    };

    const { name } = useLocalSearchParams();
    const { pokemon } = usePokemonDetails(name.toString());
    const backgroundColor = getBackgroundColor(pokemon);

    return (
        <View className="flex-1  bg-black/5">
            <Pressable className="flex-1" onPress={handleClose} />
            <BottomSheet
                ref={bottomSheetRef}
                index={2}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                onClose={handleClose}
                backgroundStyle={{ backgroundColor: backgroundColor }}
                handleIndicatorStyle={{ backgroundColor: "#FFFF", width: 40 }}
            >
                <BottomSheetView className="flex-1">
                    <View className=" relative flex-col items-center mb-4 gap-4">
                        {pokemon && <PokemonDetailsHeader pokemon={pokemon} />}

                        {pokemon && <PokemonDetailsBody pokemon={pokemon} />}
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
};

export default PokemonDetails;
