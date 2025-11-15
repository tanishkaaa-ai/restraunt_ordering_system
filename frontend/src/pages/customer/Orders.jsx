import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";

const Orders = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

 useEffect(() => {
  if (!user) {
    navigate("/login");
    return;
  }

  api.get("/order/myorders")
    .then((res) => {
      setOrders(res.data);  // ⬅ IMPORTANT CHANGE
    })
    .catch((err) => {
      console.log(err);
    });
}, [user, navigate]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">My Orders 📦</h1>

      <div className="max-w-2xl mx-auto space-y-6">

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders placed yet.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Order #{order._id.slice(-6)}
              </h2>

              <p className="text-gray-700 mt-2">
                Status:{" "}
                <span className="font-bold text-blue-600">
                  {order.status}
                </span>
              </p>

              <p className="text-gray-700 mt-1">
                Amount: ₹{order.totalAmount}
              </p>

              <button
                onClick={() => navigate(`/track?orderId=${order._id}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Track Order
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Orders;
