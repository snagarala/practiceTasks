import React, { useContext } from "react";
import {FormContext} from "./ParentFormProvider";

export default function ChildInputComponent({ name, type, placeholder }) {

  //i can use props using useContext
  const { formData, setFormData } = useContext(FormContext);

  return (
    <input
      className="border border-gray-400 text-black p-1 focus:outline-green-400 rounded"
      type={type}
      placeholder={placeholder}
      value={formData[name]}
      onChange={(e) => setFormData({...formData, [name]:e.target.value})}
    />
  );
}
