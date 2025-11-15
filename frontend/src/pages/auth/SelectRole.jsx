import React from "react";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 flex justify-center items-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Choose Your Role
        </h1>

        <p className="text-gray-600 mb-6">Who are you logging in as?</p>

        <button
          onClick={() => navigate("/login?role=customer")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg mb-4"
        >
          Customer 👤
        </button>

        <button
          onClick={() => navigate("/login?role=staff")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg"
        >
          Staff 👨‍🍳
        </button>
      </div>
    </div>
  );
};

export default SelectRole;
