import React, { useEffect, useState } from "react";
import DisplayFetchdPokemon from "./DisplayFetchdPokemon";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/slice";
import Types from "./Types";

export default function FetchedPokemon({ data }) {
  // const [pokeMonList, setPokemonList] = useState([]);
  console.log(data);

  return (
    <div>
      <Types />
      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text shadow-lg">
        Pokémon List
      </h1>

      <DisplayFetchdPokemon props={data} />
    </div>
  );
}
