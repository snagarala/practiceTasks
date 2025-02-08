import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../Redux/dataSlice";

//Taking staticData giving to redux & from redux we get values using useSelector hook.then filter & display
export default function SearchingTheProduct() {
  const data = useSelector((state: any) => state.data.items); // Get the current count
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  //static data instead of fetching from API
  const staticData = [
    { id: 1, title: "Apple" },
    { id: 2, title: "Mango" },
    { id: 3, title: "Grapes" },
    { id: 4, title: "StrawBerry" },
    { id: 5, title: "Banana" },
    { id: 6, title: "Orange" },
    { id: 7, title: "BlueBerries" },
    { id: 8, title: "Cherries" },
  ];

  // UseEffect to load static data into Redux
  useEffect(() => {
    dispatch(setData(staticData));
  }, [dispatch]);

  // Filter the data based on user input
  const filteredData = data.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ml-[50px] p-[15px] bg-yellow-100 my-[50px] h-[300px] w-[500px] items-center mb-[15px]">
      <h2 className="font-bold mb-[5px]">
        Searching the products using Filter:{" "}
      </h2>
      <input
        type="text"
        placeholder="Filter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-[5px]"
      />

      <ul className="mt-[15px]">
        {filteredData.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
