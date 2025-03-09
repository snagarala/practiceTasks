import React, { useState } from "react";
import useLocalStorageState from "../customHooks/useLocalStorageState.js";

export default function SignUpForm({ onSwitch }) {
    const [userDetails, setUserDetails] = useLocalStorageState("userDetails", {
        name:"",
        email: "",
        password:"",
      });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[400px] p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={userDetails.name}
          onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          required
        />
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
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <button onClick={onSwitch} className="text-green-500 underline">
          Login
        </button>
      </p>
    </div>
  );
}
