import { useState } from "react";

export default function ChefOrders() {
  // Dummy orders until backend connects
  const [orders, setOrders] = useState([
    {
      id: 101,
      status: "Received",
      items: [
        { name: "Margherita Pizza", qty: 1 },
        { name: "Garlic Bread", qty: 2 },
      ],
    },
    {
      id: 102,
      status: "Preparing",
      items: [{ name: "Veg Burger", qty: 2 }],
    },
    {
      id: 103,
      status: "Received",
      items: [{ name: "Chicken Biryani", qty: 1 }],
    },
  ]);

  // Update order status
  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-700 px-8 py-12 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-md">
        🍽 Kitchen Orders
      </h1>

      <div className="max-w-5xl mx-auto grid gap-10">

        {orders.map((order) => (
          <div
            key={order.id}
            className="p-8 bg-white/20 shadow-xl backdrop-blur-xl border border-white/30 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-4">Order #{order.id}</h2>

            <p className="text-xl mb-6">
              Status:{" "}
              <span className="font-bold text-yellow-300">{order.status}</span>
            </p>

            <h3 className="text-2xl mb-2 font-semibold">Items:</h3>

            <ul className="mb-6 pl-6 list-disc text-lg">
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.qty}
                </li>
              ))}
            </ul>

            {/* Status Buttons */}
            <div className="flex gap-4">

              {order.status === "Received" && (
                <button
                  onClick={() => updateStatus(order.id, "Preparing")}
                  className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
                >
                  Mark Preparing
                </button>
              )}

              {order.status === "Preparing" && (
                <button
                  onClick={() => updateStatus(order.id, "Ready")}
                  className="px-6 py-3 bg-green-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
                >
                  Mark Ready
                </button>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
