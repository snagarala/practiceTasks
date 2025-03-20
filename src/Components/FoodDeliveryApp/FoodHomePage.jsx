import React from "react";
import FoodNavbar from "./FoodNavbar";

export default function FoodHomePage() {
  return (
    <div className="h-screen [w-95%] relative text-center">
      <div className="  ">
        <FoodNavbar />
      </div>
      <img
        src="FoodImage.png"
        alt="food image"
        className="w-full h-[600px] "
      />
      <div className="flex flex-col items-center justify-center gap-4 mx-[50px] text-center">
        <h1 className="text-green-900 font-serif font-bold text-[60px] mt-[50px]">
          Welcome to Gardenia
        </h1>
        <p className="text-green-900 font-serif text-[20px]">
          Come dine with us and be a part of our family!
        </p>
        <p className="text-green-900 font-serif text-[20px] text-center px-[100px]">
          We are located at the shops at Kelly Mill at the corner.You can also
          call us with your take-out order, and we will have it ready for you at
          the register.
        </p>
      </div>
      <div className="orderWrapper flex items-center  justify-center 
          mt-[40px] mb-[40px]">
        <div
          className="  bg-green-900 text-white 
             rounded-full h-[150px] w-[150px] text-center  cursor-pointer">
          <p className="p-2 pt-[60px]">
            <i>Order Takeout</i>
          </p>
        </div>
        <p className="text-green-900 font-semibold font-serif text-start 
         underline cursor-pointer text-[30px] mt-[40px] absolute right-20">
          Now Offering<br/> Catering
        </p>
      </div>
     
    </div>
  );
}
