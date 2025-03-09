import React, { useState, useEffect, useRef, useMemo } from "react";

function HooksExample() {
  // 🔹 useState to manage counter
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 🔹 useRef to track component renders & input reference
  const renderCount = useRef(1);
  const inputRef = useRef(null);

  // 🔹 useEffect runs on every render (default behavior)
  useEffect(() => {
    console.log(`Component re-rendered! Count: ${count}`);
    renderCount.current += 1; // Increment render count
  });

  // 🔹 useEffect with dependency array (runs when 'count' changes)
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  // 🔹 useEffect to focus input on first render (empty dependency array)
  useEffect(() => {
    inputRef.current.focus(); // Auto-focus input field
  }, []);

  // 🔹 useMemo to optimize expensive calculation (runs only when count changes)
  const squaredValue = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * count; // Example expensive calculation
  }, [count]);

  return (
    <div className="p-6 flex flex-col items-center gap-4 border h-[320px] w-[450px] mb-[20px] ml-[50px] bg-lime-100">
      <h2 className="text-lg font-semibold">React Hooks Example</h2>
      
      {/* Input field using useRef for auto-focus */}
      <input
        ref={inputRef}
        type="text"
        className="border p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      {/* Counter and buttons */}
      <p className="text-lg bg-slate-200 px-2 py-1 rounded-lg">
         Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      {/* Display squared value from useMemo */}
      <p>Squared Value (Optimized with useMemo): {squaredValue}</p>

      {/* Render count using useRef */}
      <p className="text-gray-500">Component Rendered: {renderCount.current} times</p>
    </div>
  );
}

export default HooksExample;