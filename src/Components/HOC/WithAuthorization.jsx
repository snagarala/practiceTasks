import React from "react";
import { useAuth } from "./AuthContext"; // Import custom hook for authentication
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

//HOC which takes 2 inputs (,)  WrapperComponent-AdminDashBoard/ManagerDashBoard
// and firstLetter should be capital as it is a component
export default function withAuthorization(AdminDashBoard, ManagerDashBoard, allowedRoles) {
  //[manager,admin]-allowedRoles (it's an array)
  return function AuthenticatedComponent(props){  //useAuth()-is customHook we create
     const { user } = useContext(AuthContext);
     console.log(user);
     //we will get user from backEnd
     //const { user } = { user: { role:"admin" } };
    //condition false return [we are checking for match userRoles]
    if (!user || !allowedRoles.includes(user.role)) {
      //created a component go to that component & show that msg
      return <Navigate to="/unauthorized" replace />;
    }
    //else
    // Render the correct component based on the user's role
    if(user.role === "admin"){
      return <AdminDashBoard {...props} />;
    } else if (user.role === "manager"){
      return <ManagerDashBoard {...props}/>
    }else{
      return <Navigate to="/unauthorized" replace />;
    }
  };
}
