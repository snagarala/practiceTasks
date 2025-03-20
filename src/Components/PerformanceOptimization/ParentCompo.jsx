import React, { useState, useMemo, useCallback } from "react";
import ChildCompo from "./ChildCompo";

export default function ParentCompo() {
  const [count, setCount] = useState(0);

  const [fruitNames, setFruitNames] = useState(["apple", "banana", "kiwi"]);

  const [newName, setNewName] = useState(""); //for newNames which userEnters

  //we wrap inside useMemo() Hook
  let names = useMemo(() => fruitNames, [fruitNames]); //return fruitNames & whenEver fruitName changes run

  //we wrap inside useCallback() hook
  const updatedNames = useCallback(() => {
    //newName.trim() !== "" -> after trimming input should'nt empty
    if (newName.trim() !== "" && !fruitNames.includes(newName.trim())) {
      setFruitNames((prev) => [...prev, newName.trim()]); //spread old values & add new name/value
      setNewName(""); //Clear input after adding
    }
  }, [newName, fruitNames]); //run only once

  return (
    <div className="relative mt-[50px] ml-[50px] h-[400px] w-[400px] bg-red-100 rounded">
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter a name.."
        className="p-1 ml-5 mt-5 rounded bg-white outline-none border"
      />
      <p className="text-black flex justify-center p-1 w-[150px] ml-5 mt-5 rounded bg-lime-100">count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="absolute bottom-10 right-10 p-1 cursor-pointer rounded bg-blue-400 text-white "
      >
        Increment
      </button>
      <ChildCompo names={names} updatedNames={updatedNames} />
    </div>
  );
}
