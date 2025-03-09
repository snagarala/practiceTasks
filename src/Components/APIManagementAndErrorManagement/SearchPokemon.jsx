import React, {useState} from 'react';
import PokemonCard from './PokemonCard';
import Example from './Example';

export default function SearchPokemon() {

    //for eachLetter typed in searchField my "pokemonCard" is getting triggered(called)
    //so we gave debouncing(setTimeOut) in "pokemonCard"(useEffect) 
    const [searchName, setSearchName] = useState("");

  return (
    <div className="w-full h-[400px] bg-lime-100 flex flex-col items-center justify-center">
      <form className=" border border-gray-400 rounded-md p-2">
        <label className="align-middle mr-2 " htmlFor="searchName ">
          Pokemon Name
        </label>
        <input
          id="searchName"
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-black bg-transparent"
        />
      </form>
      <PokemonCard search={searchName} />
      {/* <Example search={searchName} /> */}
    </div>
  );
}