import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function DisplayFetchdPokemon({ props }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (props) {
        const data = await Promise.all(
          props.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const pokeDetails = await res.json();
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


  const totalItems = pokemonData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = pokemonData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pokemon-container">
      <div className="flex justify-center flex-wrap gap-5">
        {paginatedData ? (
          paginatedData.map((pokemon, index) => (
            <div
              key={index}
              className="box pokemon-card rounded-lg shadow-lg transform transition hover:scale-105 w-72"
            >
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
      
      
      <div className="pagination-controls flex justify-center mt-5 gap-2">
       
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>

        
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`py-2 px-4 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}

        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
