import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome Customer 👋
        </h1>

        <p className="text-gray-600 mb-8">
          What would you like to do today?
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mb-4 text-lg"
        >
          View Menu 🍽️
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg mb-4 text-lg"
        >
          View Cart 🛒
        </button>

        <button
          onClick={() => navigate("/orders")}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg mb-4 text-lg"
        >
          Track My Orders 🚚
        </button>
      </div>
    </div>
  );
};

export default CustomerAccess;
