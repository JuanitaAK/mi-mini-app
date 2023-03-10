import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Pokemons from "../components/Pokemons";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Pokemons />
    </div>
  );
};

export default Home;
