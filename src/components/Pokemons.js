import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Pokemons = () => {
  const types = [
    "fire",
    "grass",
    "poison",
    "bug",
    "water",
    "flying",
    "electric",
    "ground",
    "fairy",
    "ghost",
    "ice",
    "psychic",
    "fighting",
    "normal",
    "dragon",
  ];
  const [names, setName] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=150")
      .then((res) => setName(res.data.results));
  }, []);

  return (
    <div className="pokemons">
      <ul className="radio-container">
        <input
          className="input-range"
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        <label id="selectedType">
          Types :
          <select onChange={(e) => setSelectedType(e.target.value)} id="type">
            {types.map((type) => (
              <option value={type} id={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
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
