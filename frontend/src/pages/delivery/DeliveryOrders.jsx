import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function DeliveryOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/dashboard/delivery/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/order/update-status/${id}`, { status });
      alert("Status updated!");

      setOrders(orders.map(o =>
        o._id === id ? { ...o, status } : o
      ));

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 p-8 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12">🛵 Delivery Orders</h1>

      <div className="max-w-5xl mx-auto grid gap-8">

        {orders.map(order => (
          <div key={order._id} className="p-8 bg-white/20 rounded-3xl shadow-xl backdrop-blur-xl">

            <h2 className="text-3xl font-bold mb-2">
              Order #{order._id.slice(-6)}
            </h2>

            <p className="text-lg mb-1">Customer: {order.userId?.name}</p>
            <p className="text-lg mb-4">Status: {order.status}</p>

            <div className="flex gap-4">
              <button
                onClick={() => updateStatus(order._id, "Out for Delivery")}
                className="px-5 py-2 bg-yellow-400 text-black rounded-xl"
              >
                Out for Delivery
              </button>

              <button
                onClick={() => updateStatus(order._id, "Delivered")}
                className="px-5 py-2 bg-green-500 rounded-xl"
              >
                Delivered ✔
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
