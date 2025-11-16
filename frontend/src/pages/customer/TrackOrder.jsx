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
      case "Received": return "text-orange-500";
      case "Preparing": return "text-blue-300";
      case "Ready": return "text-green-400";
      case "Out for Delivery": return "text-orange-400";
      case "Delivered": return "text-lime-300";
      default: return "text-white";
    }
  };

  return (
   <div className="px-10 py-14 bg-[#FFD6C9] min-h-screen">

      <h1 className="text-5xl font-extrabold text-center mb-12">
        📍 Track Your Orders
      </h1>

      <div className="max-w-4xl mx-auto grid gap-10 bg-orange p-6 rounded-2xl">

        {orders.map(order => (
          <div key={order._id} className="bg-white p-8 rounded-3xl backdrop-blur-xl shadow-xl">

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
