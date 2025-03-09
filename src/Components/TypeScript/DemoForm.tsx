import React, { useState } from "react";
import useFormHook from "./useFormHook";

export default function DemoForm() {
    //used useFormHook - customHook
  const { values, handleChange } = useFormHook({
    name: "",
    email: "",
  });

  return (
    <div className="p-10 bg-lime-200 h-[200px] w-[500px] flex items-center justify-center">
      <form className="flex flex-col gap-3" action="">
        <input
          type="text"
          placeholder="Name: "
          name={"name"}
          value={values.name}
          onChange={(e) => {
            handleChange("name", e.target.value);
          }}
          className="border text-black p-2 rounded"
        />
        <input
          type="text"
          placeholder="Email: "
          name="email"
          value={values.email}
          className="border text-black p-2 rounded"
          onChange={(e) => {
            handleChange("email", e.target.value);
          }}
        />
      </form>
    </div>
  );
}
