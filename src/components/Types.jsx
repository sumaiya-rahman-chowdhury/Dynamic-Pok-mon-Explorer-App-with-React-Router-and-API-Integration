import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/slice";

export default function Types({typesHandle}) {
  const { data, loading, error } = useSelector((state) => state.data);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);



  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center items-center p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg">
        <button
          onClick={() => typesHandle("Fire")}
          className="py-2 px-6 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition-all duration-300"
        >
          Fire
        </button>
        <button
          onClick={() => typesHandle("Water")}
          className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Water
        </button>
        <button
          onClick={() => typesHandle("Grass")}
          className="py-2 px-6 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
        >
          Grass
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        {loading ? (
          <p className="col-span-3 text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="col-span-3 text-center text-red-500">Error: {error}</p>
        ) : filteredData.length > 0 ? (
          filteredData.map((pokemon) => (
            <div
              key={pokemon.id}
              className="p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto"
              />
              <h3 className="text-center font-bold text-lg capitalize">
                {pokemon.name}
              </h3>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Select a type to filter Pokémon.
          </p>
        )}
      </div>
    </div>
  );
}
