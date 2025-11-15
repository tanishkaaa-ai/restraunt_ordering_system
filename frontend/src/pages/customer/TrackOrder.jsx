import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function TrackOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/order/myorders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getColor = (status) => {
    switch (status) {
      case "Received": return "text-yellow-300";
      case "Preparing": return "text-blue-300";
      case "Ready": return "text-green-400";
      case "Out for Delivery": return "text-orange-400";
      case "Delivered": return "text-lime-300";
      default: return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-teal-400 to-blue-500 p-10 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12">
        📍 Track Your Orders
      </h1>

      <div className="max-w-4xl mx-auto grid gap-10">

        {orders.map(order => (
          <div key={order._id} className="bg-white/20 p-8 rounded-3xl backdrop-blur-xl shadow-xl">

            <h2 className="text-3xl font-bold mb-4">
              Order #{order._id.slice(-6)}
            </h2>

            <p className="text-xl mb-3">
              Status: <span className={`font-bold ${getColor(order.status)}`}>{order.status}</span>
            </p>

            <h3 className="text-xl font-semibold">Items:</h3>

            <ul className="list-disc ml-6 text-lg">
              {order.items.map((it, i) => (
                <li key={i}>{it.name} × {it.quantity}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </div>
  );
}
