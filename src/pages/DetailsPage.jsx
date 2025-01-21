import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function DetailsPage() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const { name } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [name]);

  const handleAddToCart = (name) => {
    if (!user) {
      toast.error("Please login to add to cart");
      return navigate("/login");
    }
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(name);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success(`${name} added to cart`);
    // console.log(`${name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 lg:flex items-center space-x-8 max-w-5xl">
        {/* Pokémon Image */}
        <div className="flex-shrink-0">
          <img
            className="w-96 h-96 object-contain rounded-md"
            src={details?.sprites?.front_default}
            alt={details.name}
          />
        </div>

        {/* Pokémon Details */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            {details.name}
          </h2>

          {/* Abilities */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Abilities:</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {details.abilities?.map((ability, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Types */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Types:</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {details.types?.map((type, index) => (
                <li
                  key={index}
                  className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Base Stats */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Base Stats:</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
              {details.stats?.map((stat, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
                >
                  <span className="text-gray-600 font-medium">
                    {stat.stat.name.toUpperCase()}
                  </span>
                  <span className="text-gray-800 font-bold">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Favorites Button */}
          <button
            onClick={() => handleAddToCart(details?.name)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md font-semibold transition"
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
