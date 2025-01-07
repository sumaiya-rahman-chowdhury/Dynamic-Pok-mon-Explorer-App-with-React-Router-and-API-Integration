import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/slice";
import DisplayFetchdPokemon from "./DisplayFetchdPokemon";

export default function Banner({ onSearch }) {
  const [searchContent, setSearchContent] = useState([]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <div
        className="h-[100vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://wallpapers-clan.com/wp-content/uploads/2024/04/pokemon-eevee-sitting-in-field-anime-preview-desktop-wallpaper.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0"></div>

        <div className="text-center z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Welcome to Pokémon Explorer
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 mb-8">
            Discover your favorite Pokémon from the vast Pokémon universe!
          </p>

          <div className="flex justify-center items-center gap-4">
            <input
              className="h-12 w-80 lg:w-96 px-4 rounded-lg text-gray-800 outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
              type="text"
              placeholder="Search for Pokémon"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={() => onSearch(name)}
              className="h-12 px-6 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-100"></div>
    </div>
  );
}
