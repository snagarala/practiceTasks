import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// creates a React Context to manage authentication state across the application.
//This Context will store authentication-related data (like user info).
//Other components will use this context to access user data.
export const AuthContext = createContext();

//useAuth-Custom Hook for Using Authentication
// export const useAuth = () => useContext(AuthContext);

//AuthProvider-HOC
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (role) => {
    const newUser = { role, token: "fake-jwt-token" };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/dashboard"); // Redirect to protected dashboard
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider values={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);