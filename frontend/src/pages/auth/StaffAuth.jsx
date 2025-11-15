import React from "react";
import { useNavigate } from "react-router-dom";

const StaffAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Staff Login Portal 👨‍🍳
        </h1>

        <p className="text-gray-600 mb-6">Select your role</p>

        <button
          onClick={() => navigate("/login?role=admin")}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg mb-3"
        >
          Admin
        </button>

        <button
          onClick={() => navigate("/login?role=chef")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg mb-3"
        >
          Chef
        </button>

        <button
          onClick={() => navigate("/login?role=delivery")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg text-lg"
        >
          Delivery Agent
        </button>

      </div>
    </div>
  );
};

export default StaffAuth;
