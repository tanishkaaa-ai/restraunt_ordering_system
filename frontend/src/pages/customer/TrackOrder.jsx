import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../utils/api";

export default function TrackOrder() {
  const { search } = useLocation();
  const orderId = new URLSearchParams(search).get("orderId");

  const [order, setOrder] = useState(null);

  useEffect(() => {
    api.get("/order/myorders")
      .then(res => {
        const findOrder = res.data.find(o => o._id === orderId);
        setOrder(findOrder);
      })
      .catch(err => console.log(err));
  }, [orderId]);

  if (!order) return <p>Loading...</p>;

  const steps = [
    "Received",
    "Preparing",
    "Ready",
    "Out for Delivery",
    "Delivered"
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl">Track Order</h1>

      {steps.map(step => (
        <div key={step} className="flex items-center gap-3 my-3">
          <div className={`w-4 h-4 rounded-full 
            ${step === order.status ? "bg-green-500" : "bg-gray-300"}`}></div>
          <span className={step === order.status ? "font-bold" : ""}>{step}</span>
        </div>
      ))}
    </div>
  );
}
