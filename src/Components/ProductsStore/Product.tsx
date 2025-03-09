import React from "react";

type ProductPropsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
};
export default function Product({
  id,
  title,
  description,
  image,
  rating,
  price,
}: ProductPropsType) {
  return (
    <div className="border-t ">
      <div className="flex gap-2 p-4 pt-6 ">
        <h2>{id}</h2>
        <div className={`w-16 h-16 rounded text-center pt-4 ${image}`}>
          Product
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col ml-[10px]">
            <p className="font-bold">{title}</p>
            <p>{description}</p>
          </div>
          <div className="flex items-center ml-auto space-x-4 ">
            <p className="text-yellow-500">Rating: {rating} ⭐</p>
            <p className="text-gray-600 ml-[20px]"> $ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
