import React, { useEffect, useState } from "react";
import DisplayFetchdPokemon from "./DisplayFetchdPokemon";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/slice";
import Types from "./Types";

export default function FetchedPokemon({ data }) {
  // const [pokeMonList, setPokemonList] = useState([]);
  // console.log(data);

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center
      mb-8 text-purple-600">
        Pokémon List
      </h1>

      <DisplayFetchdPokemon props={data} />
    </div>
  );
}
