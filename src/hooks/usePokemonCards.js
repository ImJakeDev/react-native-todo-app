import { useQuery } from "react-query";
import Constants from "expo-constants";

const getCards = async () => {
  const res = await fetch("https://api.pokemontcg.io/v2/cards", {
    method: "GET",
    headers: { "X-Api-Key": `${Constants.manifest.extra.pokemonTCGToken}` },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => console.error(err));
  return res;
};

export default function usePokemonCards() {
  return useQuery("pokemon-cards", () => getCards());
}