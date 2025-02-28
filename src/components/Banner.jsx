import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/slice";

export default function Banner({ onSearch }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="relative h-[80vh] sm:h-[90vh] flex items-center justify-center bg-cover bg-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), 
          url('https://wallpapers-clan.com/wp-content/uploads/2024/04/pokemon-eevee-sitting-in-field-anime-preview-desktop-wallpaper.jpg')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to Pokémon Explorer
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Discover your favorite Pokémon from the vast Pokémon universe!
        </motion.p>

        {/* Animated Search Bar */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <input
            className="h-12 w-full sm:w-80 md:w-96 px-4 rounded-full text-gray-800 outline-none 
             focus:ring-4 focus:ring-purple-400 shadow-lg border-2 border-transparent 
             focus:border-purple-500 transition duration-300"
            type="text"
            placeholder="Search for Pokémon"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <motion.button
            onClick={() => onSearch(name)}
            className="h-12 w-full sm:w-auto px-6 bg-purple-600 text-white font-bold 
             rounded-full shadow-lg hover:bg-purple-700 focus:ring-4 
             focus:ring-purple-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Search
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
