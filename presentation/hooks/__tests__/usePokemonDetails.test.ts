import { renderHook, waitFor } from "@testing-library/react";
import { usePokemonDetails } from "../usePokemonDetails";
import { getPokemonByName } from "@/core/services/pokemon/get-pokemon-by-name.service";

jest.mock("@/core/services/pokemon/get-pokemon-by-name.service");

describe("usePokemonDetails", () => {
  it("fetches and sets details for a given Pokemon name", async () => {
    const mockedGetPokemonByName = getPokemonByName as jest.MockedFunction<
      typeof getPokemonByName
    >;

    mockedGetPokemonByName.mockResolvedValue({
      id: 25,
      name: "pikachu",
      sprite: "pikachu.png",
      types: [
        {
          slot: 1,
          type: { name: "electric", url: "" },
        },
      ],
      height: 4,
      species: {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon-species/25/",
      },
      weight: 60,
    } as any);

    const { result } = renderHook(() => usePokemonDetails("pikachu"));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(mockedGetPokemonByName).toHaveBeenCalledTimes(1);
    expect(mockedGetPokemonByName).toHaveBeenCalledWith("pikachu");

    expect(result.current.pokemon).toMatchObject({
      id: 25,
      name: "pikachu",
      sprite: "pikachu.png",
      types: [
        {
          slot: 1,
          type: { name: "electric", url: "" },
        },
      ],
      height: 4,
      species: {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon-species/25/",
      },
      weight: 60,
    });
  });
});
