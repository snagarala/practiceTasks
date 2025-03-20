import React from "react";
import { useAuth } from "./AuthContext.js";

export default function Login () {
  const values = useAuth();
 console.log(values,useAuth());
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-4">Login</h1>
      {/* <button onClick={() => login("admin")} 
          className="m-2 p-2 bg-blue-500 text-white">Login as Admin</button>
      <button onClick={() => login("manager")} 
          className="m-2 p-2 bg-green-500 text-white">Login as Manager</button> */}
    </div>
  );
};

