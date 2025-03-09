import React from "react";
import CardProvider from "./CardProvider";
import ChildImageTag from "./ChildImageTag";

//h1 and p tags can also be can create as reusable component as children
export default function CardWrapper() {
  return (
    <div className="h-[500px] w-full bg-yellow-100 flex justify-center  items-center">
      <div className="flex justify-center">
        <CardProvider>
        <h1>Hello i am parent Component.</h1> 
          <p>This is sample image</p>
          <ChildImageTag />
        </CardProvider>
        </div>
    </div>
  );
}
