import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-8 flex justify-center">
      
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">

        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        <p className="text-gray-600 mb-4">
          Confirm your order details and proceed.
        </p>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg"
        >
          Place Order ✔️
        </button>

      </div>
    </div>
  );
};

export default Checkout;
