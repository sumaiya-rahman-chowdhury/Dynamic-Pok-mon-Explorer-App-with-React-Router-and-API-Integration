import React, { useEffect } from "react";
import FetchedPokemon from "./components/FetchedPokemon";
import { useTitle } from "./hooks/useTitle";
import Banner from "./components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slice/slice";

export default function Home() {
  useTitle("Home");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="space-y-10">
      <Banner />
      <FetchedPokemon data={data} />
    </div>
  );
}
