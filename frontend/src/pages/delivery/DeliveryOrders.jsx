import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function DeliveryOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/order/ready")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const updateStatus = (id, status) => {
    api.put(`/order/update-status/${id}`, { status })
      .then(() => setOrders(prev => prev.filter(o => o._id !== id)));
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl">Delivery Orders</h1>

      {orders.map(order => (
        <div key={order._id} className="bg-white shadow p-5 rounded my-4">
          <h2 className="text-xl font-bold">Order #{order._id.slice(-6)}</h2>

          <button
            onClick={() => updateStatus(order._id, "Out for Delivery")}
            className="bg-blue-500 px-4 py-2 text-white rounded mt-3"
          >
            Pick Order
          </button>

          <button
            onClick={() => updateStatus(order._id, "Delivered")}
            className="bg-green-600 px-4 py-2 text-white rounded mt-3 ml-3"
          >
            Mark Delivered
          </button>
        </div>
      ))}
    </div>
  );
}
