import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PokemonCard from "./PokemonCard";

export default function DisplayFetchdPokemon({ pokeMonCard }) {
  console.log(pokeMonCard)
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pokeMonCard) {
      setPokemonData([]);
    } else if (Array.isArray(pokeMonCard)) {
      setPokemonData(pokeMonCard);
    } else {
      setPokemonData([pokeMonCard]);
    }
    setLoading(false)
  }, [pokeMonCard]);
  // console.log(pokemonData)
  if (loading) {
    return <p className="text-center text-lg">Loading Pokémon...</p>;
  }

  console.log(pokemonData);
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-600">
        Pokémon List
      </h1>
      <div className="flex justify-center flex-wrap gap-5">
        {pokemonData.map((pokemon, indx) => (
          <PokemonCard key={indx} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
