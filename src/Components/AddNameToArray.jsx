import React, { useState } from "react";

export default function AddNameToArray() {
  const [search, setSearch] = useState("");

  const [names, setNames] = useState(["apple", "mango", "kiwi"]);

   function addName () {
    if (search.trim() !== "") { // Prevent adding empty names
        setNames([...names, search]); // Append(Add) new name to the list
        setSearch(""); // Clear input field after adding
    }
};

  return (
    <div className="flex flex-col gap-5 items-center mt-[50px] ">
      <h2 className="font-bold text-gray-600">My List:</h2>
      <div className="text-black ">
        {names?.map((name, index) => {
          return (
            <li key={index} className="text-black">
              {name}
            </li>
          );
        })}
      </div>
      <input
        type="text"
        value={search}
        placeholder="EnterName"
        onChange={(e) => setSearch(e.target.value)}
        className="border p-1 px-2 rounded"
      />
      <button onClick={addName} className="border bg-sky-300 rounded px-2 p-1"
      > Add New name</button>
    </div>
  );
}
