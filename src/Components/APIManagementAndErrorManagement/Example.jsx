import React, { useState, useEffect } from "react";

export default function Example({ search = "" }) {
  const [pokemonData, setPokemonData] = useState(null);
  
  useEffect(() => {
      async function fetchPokemon() {
        if (!search) {
            setPokemonData(null);
            return;
        }
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${search}`
          );
          const data = await response.json();
          setPokemonData(data);
        } catch (err) {
          console.log(err, "error");
        }}
        let timer = setTimeout(() => {
            fetchPokemon();
          }, 1500);
          return () => clearTimeout(timer);
    
  }, [search]);
  console.log(pokemonData, "data");
  return (
    <div>
    {pokemonData && (
        <div className="flex mt-10 flex-col items-center justify-center border border-gray-300 rounded-md p-2 shadow-md">
          <h1 className="text-2xl font-bold">{pokemonData.name}</h1>
          <img
            className="w-100 h-100 rounded-md"
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData?.name}
          />
          <p className="text-sm">Height: {pokemonData?.height}</p>
          <p className="text-sm">Weight: {pokemonData.weight}</p>
          <p className="text-sm">
            Base Experience: {pokemonData.base_experience}
          </p>
        </div>
      )}
      </div>
  );
}
