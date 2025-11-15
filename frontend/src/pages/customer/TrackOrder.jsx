import React from "react";

const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-8 flex justify-center">

      <div className="bg-white p-10 shadow-xl rounded-xl max-w-lg w-full text-center">

        <h1 className="text-3xl font-bold mb-6">Order Tracking 🚚</h1>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>Order Confirmed ✔️</p>
          <p>Preparing Food 🍳</p>
          <p>Ready for Delivery 🧺</p>
          <p>Out for Delivery 🚴‍♂️</p>
          <p>Delivered ✅</p>
        </div>

      </div>

    </div>
  );
};

export default TrackOrder;
