import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

export default function DeliveryOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    api
      .get("/dashboard/delivery/orders") // your existing backend route
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  // 1️⃣ Accept order (assign delivery agent)
  const handleAccept = (orderId) => {
    api
      .put(`/order/update-status/${orderId}`, {
        status: "Out for Delivery",
        deliveryAgentId: user.id,
      })
      .then(() => loadOrders())
      .catch((err) => console.log(err));
  };

  // 2️⃣ Mark Delivered (only if assigned to THIS agent)
  const markDelivered = (orderId) => {
    api
      .put(`/order/update-status/${orderId}`, {
        status: "Delivered",
      })
      .then(() => loadOrders())
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Delivery Orders</h1>

      <div className="grid gap-6">
        {orders.map((order) => {
          const isAssignedToMe = order.deliveryAgentId === user.id;

          return (
            <div
              key={order._id}
              className="bg-white p-6 rounded-xl shadow-md border"
            >
              <h2 className="text-xl font-bold">
                Order #{order._id.slice(-6)}
              </h2>

              <p className="text-gray-600 mt-2">
                <b>Status:</b> {order.status}
              </p>

              {/* 1️⃣ Not Assigned → show ACCEPT button */}
              {!order.deliveryAgentId && (
                <button
                  onClick={() => handleAccept(order._id)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  ACCEPT ORDER
                </button>
              )}

              {/* 2️⃣ Assigned to me → show Deliver buttons */}
              {order.deliveryAgentId && isAssignedToMe && (
                <div className="mt-4 flex gap-3">
                  {order.status === "Out for Delivery" && (
                    <button
                      onClick={() => markDelivered(order._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      MARK DELIVERED
                    </button>
                  )}
                </div>
              )}

              {/* ❌ Assigned to someone else → no buttons */}
              {order.deliveryAgentId && !isAssignedToMe && (
                <p className="text-red-500 mt-3 text-sm">
                  Assigned to another delivery agent
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
