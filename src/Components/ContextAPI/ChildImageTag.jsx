import React, { useContext } from "react";
import { CardContext } from "./CardProvider";

export default function ChildImageTag() {
  const { image, setImage } = useContext(CardContext);
  return (
    <div className="">
     { image && (
      <img src="noodles.png" alt="image" onClick={()=>setImage(false)}
         className=" h-[220px] w-[300px]  cursor-pointer"/>
     )}
     
    </div>
  );
}
