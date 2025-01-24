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
          <button className="details-button mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-4 focus:ring-red-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
