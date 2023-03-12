import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ props }) => {
  const [pokeData, setPokeData] = useState([]);
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  const pokemon = props.name;

  useEffect(() => {
    axios.get(pokeUrl + pokemon).then((res) => setPokeData(res.data));
  }, [pokemon]);

  return (
    <li className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`}
        alt={pokeData.name}
      />
      <div className="infos">
        <h2>{pokeData.name}</h2>
        <h3>Id: {pokeData.id}</h3>
        <p>XP: {pokeData.base_experience}</p>
        <p>Weight:{pokeData.weight} </p>
        <p>Type:{pokeData ? "undefined" : "?"}</p>
      </div>
    </li>
  );
};

export default Card;
