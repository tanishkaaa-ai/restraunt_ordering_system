import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, Customer 👋
        </h1>

        <p className="text-gray-600 mb-6">
          Please choose an option to continue
        </p>

        <button
          onClick={() => navigate("/login?role=customer")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg mb-4"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup?role=customer")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg text-lg"
        >
          Sign Up
        </button>

      </div>
    </div>
  );
};

export default CustomerAuth;
