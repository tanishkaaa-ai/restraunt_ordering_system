import React from "react";
import { useNavigate } from "react-router-dom";

const dummyOrders = [
  { id: 101, status: "Preparing", amount: 450 },
  { id: 102, status: "Out for Delivery", amount: 220 },
];

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">My Orders 📦</h1>

      <div className="max-w-2xl mx-auto space-y-6">

        {dummyOrders.map((order) => (
          <div key={order.id} className="bg-white shadow-md p-6 rounded-xl">

            <h2 className="text-xl font-semibold text-gray-800">
              Order #{order.id}
            </h2>

            <p className="text-gray-700 mt-2">
              Status: <span className="font-bold">{order.status}</span>
            </p>

            <p className="text-gray-700 mt-1">Amount: ₹{order.amount}</p>

            <button
              onClick={() => navigate("/track")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Track Order
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
