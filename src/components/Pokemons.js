import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Pokemons = () => {
  const [names, setName] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=150")
      .then((res) => setName(res.data.results));
  }, []);

  return (
    <div className="pokemons">
      <h1>Pokemons</h1>
      <ul>
        {names.map((data) => (
          <Card key={data.name} props={data} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
