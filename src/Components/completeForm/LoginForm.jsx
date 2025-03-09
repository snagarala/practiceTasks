import React, { useState } from "react";

// Reusable Validation Input Component
const ValidationInput = ({ label, type, name, value, onChange, validate, error }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={validate}
        className="border rounded p-2 mt-1 focus:ring-2 focus:ring-blue-400"
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  //  Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Fields
  const validateField = (name) => {
    let errorMsg = "";

    if (!formData[name]) {
      errorMsg = `${name.replace(/([A-Z])/g, " $1")} is required!`;
    } else {
      if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errorMsg = "Invalid email format!";
      }
      if (name === "password" && formData.password.length < 6) {
        errorMsg = "Password must be at least 6 characters!";
      }
      if (name === "confirmPassword" && formData.confirmPassword !== formData.password) {
        errorMsg = "Passwords do not match!";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((field) => validateField(field));

    // If no errors, submit the form
    if (Object.values(errors).every((error) => !error) && 
        Object.values(formData).every((value) => value.trim() !== "")) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Login Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Username Field */}
        <ValidationInput
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          validate={() => validateField("username")}
          error={errors.username}
        />

        {/* Email Field */}
        <ValidationInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          validate={() => validateField("email")}
          error={errors.email}
        />

        {/* Password Field */}
        <ValidationInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          validate={() => validateField("password")}
          error={errors.password}
        />

        {/* Confirm Password Field */}
        <ValidationInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          validate={() => validateField("confirmPassword")}
          error={errors.confirmPassword}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded mt-4 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
