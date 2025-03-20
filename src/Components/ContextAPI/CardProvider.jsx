import React, { useState, children, createContext } from "react";

export const CardContext = createContext();
export default function CardProvider({ children }) {

  const [image, setImage] = useState(false);

  return (
    <div className="relative h-[480px] w-[300px]  flex flex-col items-center gap-4 bg-white shadow-lg">
      <CardContext.Provider value={{ image, setImage }}>
       
          <div>{children}</div>
          <button onClick={()=>setImage(true)} className="py-1 px-2 bg-green-600 text-white cursor-pointer">
             Details</button>
        
      </CardContext.Provider>
    </div>
  );
}
