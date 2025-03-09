import React, { useState } from "react";
import useLocalStorageState from "../customHooks/useLocalStorageState.js";

export default function LoginForm({ onSwitch }) {

  const [userDetails, setUserDetails] = useLocalStorageState("userDetails", {
    email: "",
    password:"",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[400px] p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={userDetails.password}
          onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <button onClick={onSwitch} className="text-blue-500 underline">
          Sign Up
        </button>
      </p>
    </div>
  );
}