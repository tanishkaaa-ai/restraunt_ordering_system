import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function ChefOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/order/all")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const updateStatus = (id, status) => {
    api.put(`/order/update-status/${id}`, { status })
      .then(() => {
        setOrders(prev => prev.map(o => o._id === id ? {...o, status} : o));
      });
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl">Chef Orders</h1>

      {orders
        .filter(o => o.status !== "Delivered")
        .map(order => (
        <div key={order._id} className="p-5 bg-white rounded-lg shadow my-3">
          <h2 className="text-xl font-bold">Order #{order._id.slice(-6)}</h2>
          <p>Status: {order.status}</p>

          <button
            onClick={() => updateStatus(order._id, "Preparing")}
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-3"
          >
            Mark Preparing
          </button>

          <button
            onClick={() => updateStatus(order._id, "Ready")}
            className="bg-green-600 text-white px-4 py-2 rounded mt-3 ml-3"
          >
            Mark Ready
          </button>
        </div>
      ))}
    </div>
  );
}
