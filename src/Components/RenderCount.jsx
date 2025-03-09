import { useRef, useState, useEffect } from "react";

export default function RenderCounter() {

  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // Initialize render count
  const prevCountRef = useRef(0);

  useEffect(() => { // Increment render count on every render
    renderCount.current += 1; // Updates without causing a re-render
  });

  useEffect(() => {
    prevCountRef.current = count; // Store previous count value
  }, [count]);

  return (
    <div className="w-[400px] h-[200px] flex flex-col gap-2 bg-yellow-100 border m-10 p-5">
      <p className="p-1 border">Current Count: {count}</p>
      <p className="p-1 border">Previous Count: {prevCountRef.current}</p>
      <p className="p-1 border">Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)} 
        className="p-1 border w-[100px] bg-red-300"
       >Increment</button>
    </div>
  );
}
