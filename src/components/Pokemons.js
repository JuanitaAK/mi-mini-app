import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemons = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=200")
      .then((res) => setData(res.data.results));
  }, []);
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {data.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
