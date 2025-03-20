import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnAuthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-red-500 text-3xl">Access Denied</h1>
      <p className="text-gray-600">
        You do not have permission to view this page.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="m-4 p-2 bg-blue-500 text-white"
      >
        Go to Login
      </button>
    </div>
  );
}
