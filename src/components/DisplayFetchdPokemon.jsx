import React, { useEffect, useState } from "react";
import { Link } from "react-router";
export default function DisplayFetchdPokemon({ props }) {
  console.log(props);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (props) {
        const data = await Promise.all(
          props.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const pokeDetails = await res.json();
            // console.log(pokeDetails);
            return {
              name: pokemon.name,
              url: pokeDetails.sprites.front_default,
            };
          })
        );
        setPokemonData(data);
      }
    };
    fetchPokemonData();
  }, [props]);

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {pokemonData ? (
        pokemonData.map((pokemon, index) => (
          <div
            key={index}
            className="box pokemon-card             
          rounded-lg shadow-lg transform transition hover:scale-105 w-72 
          
          "
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="pokemon-image bg-white rounded-t-lg p-3">
              <img
                src={pokemon.url}
                alt={pokemon.name}
                className="w-52 h-52 mx-auto"
              />
            </div>
            <div className="pokemon-info text-center p-4">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                {pokemon.name}
              </h2>
              <Link to={`details/pokemon/${pokemon.name}`}>
                <button className="details-button mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-4 focus:ring-red-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h2>No Data Found</h2>
      )}
    </div>
  );
}
