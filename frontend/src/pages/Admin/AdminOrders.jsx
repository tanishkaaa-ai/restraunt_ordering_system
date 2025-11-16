import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/dashboard/admin/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
     <div className="px-10 py-14 bg-[#FFD6C9] min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12">📦 All Orders</h1>

     <div className="max-w-5xl mx-auto grid gap-10 bg-[#FFD6C9] p-6 rounded-2xl">

        {orders.length === 0 && (
          <p className="text-center text-lg opacity-90">Loading orders...</p>
        )}

        {orders.map((order) => (
          <div
            key={order._id}
           className="p-8 bg-white rounded-3xl backdrop-blur-xl border border-white/30 shadow-xl"


          >
            <h2 className="text-3xl font-bold mb-2">
              Order #{order._id.slice(-6)}
            </h2>

            <p className="text-xl mb-1">
              👤 Customer: 
              <span className="font-semibold ml-2">
                {order.userId?.name || "Unknown"}
              </span>
            </p>

            <p className="text-xl mb-1">
              💰 Total: ₹ {order.totalAmount}
            </p>

            <p className="text-xl mb-3">
              🚦 Status:{" "}
              <span className="font-bold text-orange-500">{order.status}</span>
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}
