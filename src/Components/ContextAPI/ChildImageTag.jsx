import React, { useContext } from "react";
import { CardContext } from "./CardProvider";

export default function ChildImageTag() {
  const { image, setImage } = useContext(CardContext);
  return (
    <div className="">
     { image && (
      <img src="product.png" alt="image" onClick={()=>setImage(false)}
         className="text-green-600 h-[60px] w-[60px] bg-green-200 rounded cursor-pointer"/>
     )}
     
    </div>
  );
}
