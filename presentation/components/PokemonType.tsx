import { TypeSlot } from "@/infraestructure/interfaces/pokemon.interface";
import { Text, View } from "react-native";

interface PokemonTypeProps {
    slot?: TypeSlot[];
    type: "column" | "row";
}

const PokemonType = ({ slot, type }: PokemonTypeProps) => {
    if (!slot) return null;

    return (
        <View
            className="gap-2 self-start z-30"
            style={{
                flexDirection: type === "column" ? "column" : "row",
            }}
        >
            {slot.map((typeSlot) => (
                <View
                    key={typeSlot.slot}
                    className="bg-white/20 px-3 py-1 rounded-full"
                >
                    <Text className=" text-white text-base font-semibold capitalize text-center">
                        {typeSlot.type.name}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default PokemonType;
