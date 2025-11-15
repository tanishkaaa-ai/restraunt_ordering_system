import { useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      id: 301,
      customer: "Tanisha",
      total: 450,
      status: "Delivered",
    },
    {
      id: 302,
      customer: "Aarav",
      total: 299,
      status: "Preparing",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 px-8 py-12 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12">📦 All Orders</h1>

      <div className="max-w-5xl mx-auto grid gap-10">

        {orders.map((order) => (
          <div
            key={order.id}
            className="p-8 bg-white/20 rounded-3xl backdrop-blur-xl border border-white/30 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-2">Order #{order.id}</h2>

            <p className="text-xl mb-1">Customer: {order.customer}</p>
            <p className="text-xl mb-1">Total: ₹ {order.total}</p>
            <p className="text-xl mb-3">
              Status:{" "}
              <span className="font-bold text-yellow-300">{order.status}</span>
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}
