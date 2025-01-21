import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import DetailsPage from "./pages/DetailsPage";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="details/pokemon/:name" element={<DetailsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp/>} />
      </Route>
    </Routes>
    </div>
  );
}
