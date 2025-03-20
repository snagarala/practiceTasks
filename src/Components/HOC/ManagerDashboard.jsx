import React from 'react';
//import WithAuthorization from "./WithAuthorization";

export default function ManagerDashboard() {
  return (
    <div className="m-8 p-4 bg-green-200 shadow-lg rounded-lg w-[500px]">
    <h1 className="text-gray-800">Manager Panel - Restricted Access</h1>
    <h2 className="text-xl font-semibold mb-2">Welcome to your DashBoard</h2>
    <p className="text-gray-600">
      Total Users:
      <span className="font-bold">1,250</span>
    </p>
    <p className="text-gray-600">
      Active Users:
      <span className="font-bold">950</span>
    </p>

    </div>
  )
}

//export default WithAuthorization(ManagerDashboard, ["manager"]);