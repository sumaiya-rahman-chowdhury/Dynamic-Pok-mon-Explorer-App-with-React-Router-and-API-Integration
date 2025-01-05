import React, { useEffect, useState } from "react";
import DisplayFetchdPokemon from "./DisplayFetchdPokemon";

export default function FetchedPokemon() {
  const [pokeMonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const pokeMon = await res.json();
        // console.log(pokeMon)
        setPokemonList(pokeMon.results);
        // console.log(pokeMonList);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
        <DisplayFetchdPokemon props={pokeMonList}/>
    </div>
  )
}
