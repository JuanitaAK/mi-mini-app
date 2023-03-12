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
  const [selectedName, setSelectedName] = useState("");

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
        <label id="selectedName">
          Name :
          <select onChange={(e) => setSelectedName(e.target.value)} id="name">
            {names.map((name, index) => (
              <option key={index} value={name.name} id={name.name}>
                {name.name}
              </option>
            ))}
          </select>
        </label>
      </ul>

      <ul className="poke">
        {names
          .filter((pokemons) => pokemons.name.includes(selectedName))
          .sort()
          .slice(0, rangeValue)
          .map((data, index) => (
            <Card key={index} props={data} />
          ))}
      </ul>
    </div>
  );
};

export default Pokemons;
