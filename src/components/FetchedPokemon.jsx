import React, { useEffect, useState } from "react";
import DisplayFetchdPokemon from "./DisplayFetchdPokemon";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/slice";

export default function FetchedPokemon() {
  // const [pokeMonList, setPokemonList] = useState([]);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <DisplayFetchdPokemon props={data} />
    </div>
  );
}
