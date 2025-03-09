import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setSelectedOrderBy } from "../../Redux/productSlice";

export default function OrderBy({
  title,
  values,
}: {
  title: string;
  values: { id: number; name: string }[];
}) {
  const [selectedValue, setSelectedValue] = React.useState<{
    id: number;
    name: string;
  }>(values[0]);
  console.log(selectedValue,"selectedValue");

  const dispatch = useDispatch();
  
  return (
    <div className="absolute border z-40 bg-gray-100 rounded hover:h-auto overflow-hidden ">
      <div className="box flex items-center cursor-pointer justify-around py-2 px-4">
        <span className="font-semibold">{title}</span>
        <MdKeyboardArrowDown size={20} />
      </div>
      {values.map((value) => {
        return (
          <span
            className={`box px-4 py-3 flex text-sm hover:bg-[#F5F5F6] cursor-pointer
             ${value.name === selectedValue.name ? 'bg-gray-200' : ''}`}
            onClick={() => {
              setSelectedValue(value);
              dispatch(setSelectedOrderBy(value));
            }}
          >
            {value.name}
          </span>
        );
      })}
    </div>
  );
}
