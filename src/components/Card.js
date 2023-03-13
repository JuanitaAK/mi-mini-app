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
    <ul className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`}
        alt={pokeData.name}
      />
      <div className="infos">
        <h1>{pokeData.name}</h1>
        {/* <h3>Id: {pokeData.id}</h3> */}
        <li>XP: {pokeData.base_experience}</li>
        <li>Weight: {pokeData.weight} </li>
        <li>
          Type:
          {pokeData.types?.map((type, i) => {
            return <ul key={i}>{type.type.name}</ul>;
          })}
        </li>
      </div>
    </ul>
  );
};

export default Card;
