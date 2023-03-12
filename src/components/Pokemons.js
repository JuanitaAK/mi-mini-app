import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Pokemons = () => {
  const [names, setName] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=150")
      .then((res) => setName(res.data.results));
  }, []);

  return (
    <div className="pokemons">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => console.log(e.target.value)}
        />
      </ul>
      <ul className="poke">
        {names.slice(0, rangeValue).map((data) => (
          <Card key={data.name} props={data} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
