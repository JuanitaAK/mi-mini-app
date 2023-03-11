import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ props }) => {
  const [pokeData, setPokeData] = useState([]);
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    axios.get(pokeUrl + props.name).then((res) => setPokeData(res.data));
  }, []);

  return (
    <li className="card">
      <div className="infos">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}
          alt={props.name}
        />
        <h2>Pokemon Name : {pokeData.name}</h2>
      </div>
    </li>
  );
};

export default Card;
