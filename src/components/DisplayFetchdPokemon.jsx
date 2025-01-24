import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

export default function DisplayFetchdPokemon({ pokeMonCard }) {
  // console.log(pokeMonCard);
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPokemon, setCurrentPokemon] = useState([]);

  useEffect(() => {
    if (!pokeMonCard) {
      setPokemonData([]);
    } else if (Array.isArray(pokeMonCard)) {
      setPokemonData(pokeMonCard);
    } else {
      setPokemonData([pokeMonCard]);
    }
    setCurrentPage(1)
    // setLoading(false);
  }, [pokeMonCard]);
  console.log(pokemonData)
 

  const postPerPage = 5;
  useEffect(() => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const current = pokemonData.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPokemon(current)
    setLoading(false)
  }, [pokemonData,currentPage]);
  if (loading) {
    return <p className="text-center text-lg">Loading Pokémon...</p>;
  }
  console.log(currentPokemon);
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-600">
        Pokémon List
      </h1>
      <div className="flex justify-center flex-wrap gap-5">
        {currentPokemon.map((pokemon, indx) => (
          <PokemonCard key={indx} pokemon={pokemon} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination
          postPerPage={postPerPage}
          postLength={pokemonData.length}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
