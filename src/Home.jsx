import React, { useEffect, useState } from "react";
import { useTitle } from "./hooks/useTitle";
import Banner from "./components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slice/slice";
import Types from "./components/Types";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DisplayFetchdPokemon from "./components/DisplayFetchdPokemon";

export default function Home() {
  const [pokeMonCard, setPokemonCard] = useState([]);
  useTitle("Home");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  // console.log(data);
  //
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setPokemonCard(data);
    }
  }, [data]);

  const handlerSearch = async (item) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
      .then((res) => res.json())
      .then((data) => setPokemonCard(data));
  };
  // console.log(pokeMonCard);
  // const typesHandle = (type) => {
  //   console.log("Selected Type:", type);

  //   const fetchPromises = data?.map((pokemon) => {
  //     const url = pokemon?.url;

  //     return fetch(url)
  //       .then((res) => res.json())
  //       .then((pokemonData) => {
  //         const types = pokemonData.types;

  //         const hasSelectedType = types.some(
  //           (t) => t.type.name === type.toLowerCase()
  //         );

  //         if (hasSelectedType) {
  //           return pokemon;
  //         }
  //         return null;
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching Pokémon data:", error);
  //         return null;
  //       });
  //   });

  //   Promise.all(fetchPromises)
  //     .then((results) => {
  //       const filteredPokemons = results.filter((pokemon) => pokemon !== null);

  //       setPokemonCard(filteredPokemons);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching Pokémon data:", error);
  //     });
  // };

  return (
    <div className="space-y-10">
      <Banner onSearch={handlerSearch} />
      <DisplayFetchdPokemon pokeMonCard={pokeMonCard} />
      <About />
      <Contact />
    </div>
  );
}
