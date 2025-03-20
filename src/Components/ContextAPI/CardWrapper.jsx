import React from "react";
import CardProvider from "./CardProvider";
import ChildImageTag from "./ChildImageTag";

//h1 and p tags can also be can create as reusable component as children
export default function CardWrapper() {
  return (
    <div className="h-[500px] w-full bg-yellow-100 flex justify-center  items-center">
      <div className="flex justify-center">
        <CardProvider>
        <ChildImageTag />
          <h1 className="mt-5 pl-4">Hello i am parent Component.</h1>
          <p className="mt-2 pl-4 font-bold ">Instant Pot Spicy Thai Noodles.</p>
          
        </CardProvider>
      </div>
    </div>
  );
}
