import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-[600px] bg-gray-100">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUpForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}