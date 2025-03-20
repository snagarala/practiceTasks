//import React from "react";
import withAuthorization from "./WithAuthorization";
import AdminDashBoard from "./AdminDashBoard";
import ManagerDashboard from "./ManagerDashboard";

//we will be giving this component in App.tsx
export default withAuthorization(AdminDashBoard, ManagerDashboard, ["admin", "manager"]); 
