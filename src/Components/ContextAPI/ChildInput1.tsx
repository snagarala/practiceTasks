import React, { useContext } from "react";
import {FormContext} from "./ParentFormProvider";

// Define props for Input component
type InputProps = {
    name: keyof FormData;
    type: string;
    placeholder: string;
  };

export default function ChildInput1({ name, type, placeholder }: InputProps): JSX.Element {

  //i can use props using useContext
  const { formData, setFormData } = useContext(FormContext);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prev:any) => ({ ...prev, [name]: e.target.value }));
  // };

  return (
    <input
      className="border border-gray-400 text-black p-1 focus:outline-green-400 rounded"
      type={type}
      placeholder={placeholder}
      value={formData[name]}
      //onChange={handleChange}  
      //onChange={(e) => setFormData({...formData, [name]:e.target.value})}
    />
  );
}