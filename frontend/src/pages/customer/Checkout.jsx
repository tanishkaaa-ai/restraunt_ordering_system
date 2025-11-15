import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

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
      });
  }, []);

  const handleOrder = () => {
    api.post("/order/create", {
      items: cartItems.map(item => ({
        itemId: item.itemId,
        quantity: item.quantity
      }))
    })
      .then(() => {
        alert("Order placed!");
        navigate("/orders");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl">Checkout</h1>
      <button onClick={handleOrder} className="bg-green-500 p-3 mt-5 text-white">
        Place Order
      </button>
    </div>
  );
}
