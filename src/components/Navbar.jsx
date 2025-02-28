import { getAuth, signOut } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logedOut } from "../slice/authSlice";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleSignOut = ()=>{
    signOut(auth)
    .then(()=>{
      dispatch(logedOut());
      toast.success("Successfully Logged Out");
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  console.log(user);
  return (
    <nav className="p-4 shadow-lg drop-shadow-2xl ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-black text-2xl font-bold">
          Pokémon Explorer
        </a>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-black hover:text-gray-200 transition duration-200"
          >
            Home
          </a>
          <a
            href="/favorites"
            className="text-black hover:text-gray-200 transition duration-200"
          >
            Favorites
          </a>
          <a
            href="/about"
            className="text-black hover:text-gray-200 transition duration-200"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-black hover:text-gray-200 transition duration-200"
          >
            Contact
          </a>
          {user ? (
         <button onClick={handleSignOut}>
           <a
            href=""
            className="text-black hover:text-gray-200 transition duration-200"
          >
            LogOut 
          </a>
         </button>
        ) : (
          <a
            href="/login"
            className="text-black hover:text-gray-200 transition duration-200"
          >
            Login
          </a>
        )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-purple-700 p-4 text-center space-y-4"
      >
        <a
          href="/"
          className="block text-black hover:text-gray-200 transition duration-200"
        >
          Home
        </a>
        <a
          href="/explore"
          className="block text-black hover:text-gray-200 transition duration-200"
        >
          Explore
        </a>
        <a
          href="/about"
          className="block text-black hover:text-gray-200 transition duration-200"
        >
          About
        </a>
        <a
          href="/contact"
          className="block text-black hover:text-gray-200 transition duration-200"
        >
          Contact
        </a>
        {user ? (
          <button onClick={()=>handleSignOut()}           
            className="text-black hover:text-gray-200 transition duration-200"
          >
            LogOut
          </button>
        ) : (
          <a
            href="/login"
            className="text-black hover:text-gray-200 transition duration-200"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
