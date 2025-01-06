import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="details/pokemon/:name" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}
