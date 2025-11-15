import { useState } from "react";

export default function DeliveryOrders() {
  // Dummy data (replace from backend later)
  const [orders, setOrders] = useState([
    {
      id: 201,
      customer: "Ayesha",
      address: "Plot 23, Green City, Hyderabad",
      status: "Ready",
      items: [
        { name: "Chicken Biryani", qty: 1 },
        { name: "Coke", qty: 1 },
      ],
    },
    {
      id: 202,
      customer: "Raghav",
      address: "5th Cross, MG Road, Bangalore",
      status: "Out for Delivery",
      items: [{ name: "Pizza", qty: 2 }],
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-700 px-8 py-12 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
        📦 Delivery Orders
      </h1>

      <div className="max-w-5xl mx-auto grid gap-10">

        {orders.map((order) => (
          <div
            key={order.id}
            className="p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-2">Order #{order.id}</h2>

            <p className="text-xl mb-2">
              <span className="font-bold">Customer:</span> {order.customer}
            </p>
            <p className="text-xl mb-4">
              <span className="font-bold">Address:</span> {order.address}
            </p>

            <p className="text-xl mb-6">
              Status:{" "}
              <span className="font-bold text-yellow-300">{order.status}</span>
            </p>

            <h3 className="text-2xl mb-2 font-semibold">Items:</h3>

            <ul className="pl-6 mb-6 list-disc text-lg">
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.qty}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex gap-4">

              {order.status === "Ready" && (
                <button
                  onClick={() => updateStatus(order.id, "Out for Delivery")}
                  className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
                >
                  Mark Out for Delivery
                </button>
              )}

              {order.status === "Out for Delivery" && (
                <button
                  onClick={() => updateStatus(order.id, "Delivered")}
                  className="px-6 py-3 bg-green-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
                >
                  Mark Delivered
                </button>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
