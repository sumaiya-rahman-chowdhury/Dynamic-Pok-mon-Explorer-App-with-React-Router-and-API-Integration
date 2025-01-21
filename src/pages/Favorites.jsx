import React, { useState, useEffect } from "react";

export default function Favorites() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  console.log("Cart:", cart);
  const handleRemove = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  return (
    <div className="p-5 h-[100vh]">
      <h2 className="text-2xl font-bold mb-4">Favorites Added Items</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="p-4 border-b border-gray-300">
            <p className="text-lg">{item}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No items in your favorites.</p>
      )}
      {cart.length > 0 ? (
        <button
          className="bg-blue-400 p-2 text-white mt-6"
          onClick={() => handleRemove()}
        >
          Remove All
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
