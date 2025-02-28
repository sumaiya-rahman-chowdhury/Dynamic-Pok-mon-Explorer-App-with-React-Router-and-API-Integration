import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

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
    setCurrentPage(1);
    // setLoading(false);
  }, [pokeMonCard]);
  console.log(pokemonData);

  // const itemVariant = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  const postPerPage = 5;
  useEffect(() => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const current = pokemonData.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPokemon(current);
    setLoading(false);
  }, [pokemonData, currentPage]);
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
          <motion.div
            key={indx}
            // variants={itemVariant}
            initial={{
              rotate: "180deg",
              scale: 0,
            }}
            whileInView={{ opacity: 1, y: 0, rotate: "0deg", scale: 1 }}
            // animate={{

            // }}
            exit={{
              rotate: "180deg",
              scale: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            viewport={{ once: true, amount: 0.2 }} // ✅ Animates once when 20% visible
          >
            <PokemonCard pokemon={pokemon} />
          </motion.div>
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
