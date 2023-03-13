import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Pokemons = () => {
  const [names, setName] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedName, setSelectedName] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=1100")
      .then((res) => setName(res.data.results))
      .catch((error) => {
        console.err(error);
      });
  }, []);

  return (
    <div className="pokemons">
      <ul className="radio-container">
        <input
          className="input-range"
          type="range"
          min="1"
          max="1100"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <label id="searchName" className="search-name">
          Know the name ? :
          <input
            id="filter"
            name="filter"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
        <label id="selectedName" className="selectedName">
          Name :
          <select
            type="option"
            onChange={(e) => setSelectedName(e.target.value)}
            id="name"
          >
            {names.map((name, index) => (
              <option key={index} value={name.name} id={name.name}>
                {name.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {selectedName && (
            <button onClick={() => setSelectedName("")}>Stop Filter</button>
          )}
        </label>
      </ul>

      <ul className="poke">
        {names
          .filter((pokemons) => pokemons.name.includes(filter) || filter === "")
          .filter((pokemons) => pokemons.name.includes(selectedName))
          .slice(0, rangeValue)
          .map((data, i) => (
            <Card key={i} props={data} />
          ))}
      </ul>
    </div>
  );
};

export default Pokemons;
