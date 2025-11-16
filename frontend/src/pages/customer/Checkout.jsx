import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // To collect missing phone/address
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");

  useEffect(() => {
    api.get("/cart")
      .then(res => {
        setCartItems(res.data.items);

        setTotal(
          res.data.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          )
        );
      })
      .catch(err => console.log(err));
  }, []);

  const handleOrder = async () => {
    // ask phone & address if missing
    if (!phone || !address) {
      alert("Please enter phone and address.");
      return;
    }

    try {
      await api.post("/order/create", {
        items: cartItems.map(item => ({
          itemId: item.itemId,
          quantity: item.quantity
        })),
        phone,
        address
      });

      await api.delete("/cart/clear");

      alert("Order placed successfully!");
      navigate("/orders");

    } catch (err) {
      console.log(err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-10 flex justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        {/* ORDER SUMMARY */}
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {cartItems.map((item, i) => (
          <div key={i} className="flex justify-between mb-3 border-b pb-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-4" />

        {/* BILL DETAILS */}
        <div className="text-lg">
          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{total}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery Charge:</span>
            <span>₹40</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (5%):</span>
            <span>₹{(total * 0.05).toFixed(0)}</span>
          </p>

          <p className="flex justify-between font-bold text-xl mt-4">
            <span>Total:</span>
            <span>₹{total + 40 + total * 0.05}</span>
          </p>
        </div>

        {/* PHONE & ADDRESS */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 border rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Delivery Address"
            className="w-full p-3 border rounded-lg"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl mt-6 text-xl font-semibold"
        >
          Place Order
        </button>

      </div>
    </div>
  );
}