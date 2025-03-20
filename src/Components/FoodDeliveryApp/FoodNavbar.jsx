import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import HandBurgerMenu from "./HandBurgerMenu";

export default function FoodNavbar() {
  const [isHandBurger, setIsHandBurger] = useState(false);

  function onClose() {
    setIsHandBurger(false);
  }
  return (
    <div className="sticky top-0 z-50 w-full h-[700px] bg-white mt-[50px]">
      <div className="wrapper flex justify-between w-full">
        <div className=" mt-[20px] ml-[20px]">
          <h1 className="text-green-900 font-extrabold text-[120px] font-serif">
            Gardenia
          </h1>
          <img
            src="https://static.wixstatic.com/media/7a07d6_bf44db4eaf8a480ba19f3caed58d149a~mv2.png/v1/fill/w_352,h_239,al_c,lg_1,q_85,enc_avif,quality_auto/7a07d6_bf44db4eaf8a480ba19f3caed58d149a~mv2.png"
            alt="food logo"
            className="w-[450px] h-[380px] "
          />
        </div>
        <div
          onClick={() => setIsHandBurger(true)}
          className="mt-[60px] mr-[25px] bg-green-900 text-white flex items-center justify-center
             rounded-full h-[150px] w-[150px]  p-8 cursor-pointer"
        >
          <IoMenu size={60} />
        </div>
      </div>
      <h2 className="text-green-900 italic font-semibold text-[40px] 
        pl-2 mt-4 opacity-75">
        An Authentic Mediterranean Dining Experience.
      </h2>
      <div className="model">{isHandBurger && <HandBurgerMenu onClose={onClose} />}</div>
    </div>
  );
}
