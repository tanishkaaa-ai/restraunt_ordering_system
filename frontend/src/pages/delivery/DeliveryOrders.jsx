import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

export default function DeliveryOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Load READY + THIS AGENT's ORDERS
  useEffect(() => {
    api.get("/order/delivery-orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const acceptOrder = (id) => {
    api.put(`/order/accept/${id}`)
      .then(res => {
        alert("Order accepted!");

        setOrders(prev =>
          prev.map(o =>
            o._id === id
              ? { ...o, deliveryAgentId: user.id, status: "Out for Delivery" }
              : o
          )
        );
      })
      .catch(err => console.log(err));
  };

  const markDelivered = (id) => {
    api.put(`/order/mark-delivered/${id}`)
      .then(() => {
        setOrders(prev => prev.filter(o => o._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="px-10 py-14 bg-[#FFD6C9] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Delivery Orders</h1>

      {orders.length === 0 && (
        <p className="text-white-600">No orders available.</p>
      )}

      {orders.map(order => (
        <div key={order._id} className="bg-white p-6 shadow rounded-xl mb-6">

          <h2 className="text-xl font-bold">
            Order #{order._id.slice(-6)}
          </h2>

          <p className="mt-2 text-gray-700">
            Customer: {order.userId?.name}
          </p>

          <p className="text-gray-700">
            Total: ₹{order.totalAmount}
          </p>

          <p className="text-gray-700 font-semibold">
            Status: {order.status}
          </p>

          {!order.deliveryAgentId && (
            <button
              onClick={() => acceptOrder(order._id)}
              className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg"
            >
              Accept Order
            </button>
          )}

          {order.deliveryAgentId === user.id && (
            <button
              onClick={() => markDelivered(order._id)}
              className="mt-4 ml-4 px-4 py-2 bg-orange-600 text-white rounded-lg"
            >
            Mark as Delivered
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
