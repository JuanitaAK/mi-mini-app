import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ props }) => {
  const [pokeData, setPokeData] = useState([]);
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  let pokemon = props.name;

  useEffect(() => {
    axios.get(pokeUrl + pokemon).then((res) => setPokeData(res.data));
  }, [pokemon]);
  /* <p>Types: {pokeData.types[0].type.name}</p> */
  //  {pokeData.abilites[0].ability.name}

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
      </div>
    </li>
  );
};

export default Card;
