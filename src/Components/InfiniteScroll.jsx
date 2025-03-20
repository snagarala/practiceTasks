import React, { useState, useRef, useEffect } from "react";
import useInfiniteScroll from "./customHooks/useInfiniteScroll";

//how many items are there in that page we will come to know by API
//you will continuously hit the API when page is empty "hasMore" -become- false
const fetchItems = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10` //here i have to give page,limit
  );
  return res.json();
};

export default function InfiniteScroll() {
  const observerRef = useRef(null);
  //the return {items} in customHook we are taking here
  const { items, loading } = useInfiniteScroll(observerRef, fetchItems);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className=" h-[400px] border overflow-auto p-4 bg-lime-100">
        <h2 className="font-bold underline">Infinite scroll:</h2>
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => {
            return <li key={item.id}>{item.title}</li>;
          })}

          {loading && <p>Loading....</p>}
          <div //we gave reference to this div element
            ref={observerRef}
            style={{ height: "20px", background: "transparent" }}
          ></div>
        </ul>
      </div>
    </div>
  );
}
