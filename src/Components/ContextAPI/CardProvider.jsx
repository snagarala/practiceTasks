import React, { useState, children, createContext } from "react";

export const CardContext = createContext();
export default function CardProvider({ children }) {

  const [image, setImage] = useState(false);

  return (
    <div className="relative h-[300px] w-[400px] p-4 flex flex-col items-center justify-center gap-4 bg-white rounded-md shadow-lg">
      <CardContext.Provider value={{ image, setImage }}>
        {/* <card className=" w-[200px] h-[400px] shadow-md bg-white "> */}
          <button onClick={()=>setImage(true)} className="py-1 px-2 bg-gray-300 rounded cursor-pointer">
             Image</button>
          
          <div>{children}</div>
        {/* </card> */}
      </CardContext.Provider>
    </div>
  );
}
