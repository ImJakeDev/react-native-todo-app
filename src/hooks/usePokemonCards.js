import { useQuery } from "react-query";
import Constants from "expo-constants";

const getCards = async () => {
  const res = await fetch("https://api.pokemontcg.io/v2/cards", {
    method: "GET",
    headers: { "X-Api-Key": `${Constants.manifest.extra.pokemonTCGToken}` },
  });
  return res;
};

export default function usePokemonCards() {
  return useQuery("pokemon-cards", () => getCards());
}