import React from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router";

export default function PokemonCard({ pokemon }) {
  // console.log(pokemon)
  const { name, url } = pokemon;
  return (
    <div className="box pokemon-card rounded-lg shadow-lg transform transition hover:scale-105 w-72">
      <div className="pokemon-image bg-white rounded-t-lg p-3">
        <PokemonImage url={url} name={name} />
      </div>
      <div className="pokemon-info text-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">{name}</h2>
        <Link to={`details/pokemon/${name}`}>
          <button
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg 
             transition-all duration-300 ease-in-out transform 
             hover:scale-105 hover:shadow-md hover:bg-red-600 
             active:scale-95 my-5"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
