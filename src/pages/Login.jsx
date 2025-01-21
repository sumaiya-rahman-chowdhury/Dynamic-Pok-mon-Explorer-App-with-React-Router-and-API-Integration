import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result);
      navigate(from, { replace: true });
      toast.success("Logged in successfully");
    });
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      <form onSubmit={handleSignIn}>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-3xl font-extrabold text-center text-purple-600 mb-6">
            Welcome Back!
          </h1>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <button className="w-full mt-6 p-3 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all">
            Sign In
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
