import { useQuery } from "react-query";

const getPokemonInfo = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((err) => console.error(err));
  return res;
};

export default function usePokemonInfo(name) {
  return useQuery(["pokemon-info", name], () => getPokemonInfo(name));
}
