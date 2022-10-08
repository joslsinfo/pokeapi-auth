import React from "react";
import PokeList from "./PokeList";
import useFetchPokemons from "../hooks/useFetchPokemons";

const Pokemons = () => {
  const data = useFetchPokemons();
  return <PokeList pokemons={data} />;
};

export default Pokemons;



// import React from "react";
// import PokeList from "./PokeList";
// import usePokemons from "../hooks/usePokemons";

// const Pokemons = () => {
//   const data = usePokemons();
//   return <PokeList pokemons={data} />;
// };

// export default Pokemons;
