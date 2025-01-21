import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
export default function SignUp() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
        const user = result.user;
        updateProfile(user, {displayName: name})
        console.log(user)
    })
    .catch(error=>{
        console.log(error)
    })
  };
  return (
    <div>
      <div className="h-auto  flex justify-center items-center">
        <form action="" onSubmit={handleSignUp}>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm my-5">
            <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
              Create an Account
            </h1>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                onChange={e=>setName(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* <div>
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div> */}
            </div>

            <button className="w-full mt-6 p-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all">
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
