import { renderHook, waitFor } from "@testing-library/react";
import { usePokemon } from "../usePokemon";
import { getPokemonList } from "@/core/services/pokemon/get-pokemon-list.service";
import { getPokemonByName } from "@/core/services/pokemon/get-pokemon-by-name.service";

jest.mock("@/core/services/pokemon/get-pokemon-list.service");
jest.mock("@/core/services/pokemon/get-pokemon-by-name.service");

describe("usePokemon", () => {
  it("fetches and sets Pokemon list with sprites and types", async () => {
    const mockedGetPokemonList = getPokemonList as jest.MockedFunction<
      typeof getPokemonList
    >;
    const mockedGetPokemonByName = getPokemonByName as jest.MockedFunction<
      typeof getPokemonByName
    >;

    mockedGetPokemonList.mockResolvedValue([
      { name: "pikachu" },
      { name: "bulbasaur" },
    ] as any);

    mockedGetPokemonByName
      .mockResolvedValueOnce({
        name: "pikachu",
        sprite: "pikachu.png",
        types: [
          {
            slot: 1,
            type: { name: "electric", url: "" },
          },
        ],
      } as any)
      .mockResolvedValueOnce({
        name: "bulbasaur",
        sprite: "bulbasaur.png",
        types: [
          {
            slot: 1,
            type: { name: "grass", url: "" },
          },
        ],
      } as any);

    const { result } = renderHook(() => usePokemon());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(mockedGetPokemonList).toHaveBeenCalledTimes(1);
    expect(mockedGetPokemonByName).toHaveBeenCalledTimes(2);
    expect(mockedGetPokemonByName).toHaveBeenNthCalledWith(1, "pikachu");
    expect(mockedGetPokemonByName).toHaveBeenNthCalledWith(2, "bulbasaur");

    expect(result.current.pokemons).toHaveLength(2);
    expect(result.current.pokemons[0]).toMatchObject({
      name: "pikachu",
      sprite: "pikachu.png",
      types: [
        {
          slot: 1,
          type: { name: "electric", url: "" },
        },
      ],
    });

    expect(result.current.pokemons[1]).toMatchObject({
      name: "bulbasaur",
      sprite: "bulbasaur.png",
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "" },
        },
      ],
    });
  });
});
