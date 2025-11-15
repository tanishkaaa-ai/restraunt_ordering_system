import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Load cart from backend
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    api
      .get("/cart")
      .then((res) => {
        setCart(res.data.items || []);
      })
      .catch((err) => console.log(err));
  }, [user, navigate]);

  // Update quantity
  const updateQuantity = (itemId, quantity) => {
    api
      .put("/cart/update", { itemId, quantity })
      .then((res) => {
        setCart(res.data.cart.items);
      })
      .catch((err) => console.log(err));
  };

  // Remove item
  const removeItem = (itemId) => {
    api
      .delete(`/cart/remove/${itemId}`)
      .then((res) => {
        setCart(res.data.cart.items);
      })
      .catch((err) => console.log(err));
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-xl">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-3xl">
          {cart.map((item) => (
            <div
              key={item.itemId}
              className="flex justify-between items-center p-4 border-b"
            >
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-gray-500">₹{item.price}</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    updateQuantity(item.itemId, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(item.itemId, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.itemId)}
                  className="text-red-500 font-bold ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-2xl font-bold text-gray-800">
              Total: ₹{total}
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 px-8 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
