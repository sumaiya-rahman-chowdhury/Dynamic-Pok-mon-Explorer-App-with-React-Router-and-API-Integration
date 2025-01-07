import React, { useEffect, useState } from "react";
import FetchedPokemon from "./components/FetchedPokemon";
import { useTitle } from "./hooks/useTitle";
import Banner from "./components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slice/slice";
import Types from "./components/Types";

export default function Home() {
  const [pokeMonCard, setPokemonCard] = useState([]);
  useTitle("Home");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setPokemonCard(data);
    }
  }, [data]);

  const handlerSearch = (item) => {
    const filteredPokemon = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(item.toLowerCase())
    );
    setPokemonCard(filteredPokemon);
    console.log(item);
  };

  const typesHandle = (type) => {
    console.log("Selected Type:", type);

    const fetchPromises = data?.map((pokemon) => {
      const url = pokemon?.url;

      return fetch(url)
        .then((res) => res.json())
        .then((pokemonData) => {
          const types = pokemonData.types;

          const hasSelectedType = types.some(
            (t) => t.type.name === type.toLowerCase()
          );

          if (hasSelectedType) {
            return pokemon;
          }
          return null;
        })
        .catch((error) => {
          console.error("Error fetching Pokémon data:", error);
          return null;
        });
    });

    Promise.all(fetchPromises)
      .then((results) => {
        const filteredPokemons = results.filter((pokemon) => pokemon !== null);

        setPokemonCard(filteredPokemons);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  };

  return (
    <div className="space-y-10">
      <Banner onSearch={handlerSearch} />
      <Types typesHandle={typesHandle} />
      <FetchedPokemon data={pokeMonCard} />
    </div>
  );
}
