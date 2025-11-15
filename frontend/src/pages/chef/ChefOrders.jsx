import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function ChefOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/dashboard/chef/orders")
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
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 p-8 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12">👨‍🍳 Chef Orders</h1>

      <div className="max-w-5xl mx-auto grid gap-8">

        {orders.map(order => (
          <div key={order._id} className="p-8 bg-white/20 rounded-3xl shadow-xl backdrop-blur-xl">

            <h2 className="text-3xl font-bold mb-2">
              Order #{order._id.slice(-6)}
            </h2>

            <p className="text-lg">Customer: {order.userId?.name}</p>
            <p className="text-lg mb-4">Status: {order.status}</p>

            <h3 className="text-xl font-semibold mt-4">Items:</h3>
            <ul className="list-disc ml-6 text-lg">
              {order.items.map((it, i) => (
                <li key={i}>{it.name} × {it.quantity}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => updateStatus(order._id, "Preparing")}
                className="px-5 py-2 bg-blue-500 rounded-xl"
              >
                Preparing
              </button>

              <button
                onClick={() => updateStatus(order._id, "Ready")}
                className="px-5 py-2 bg-green-500 rounded-xl"
              >
                Ready ✔
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
