import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Menu = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Use local dummy menu items (no backend)
    setItems([
      {
        id: 1,
        name: "Spicy Chicken Bowl",
        price: 180,
        img: "https://images.unsplash.com/photo-1606756790138-87a0c7176678?auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 2,
        name: "Veggie Delight",
        price: 120,
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 3,
        name: "Prawn Noodles",
        price: 150,
        img: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 4,
        name: "Crispy Fries",
        price: 80,
        img: "https://images.unsplash.com/photo-1606755962773-0c94b6b3a8e2?auto=format&fit=crop&w=600&q=60",
      },
    ]);
  }, []);

  const handleAddToCart = (item) => {
    if (!user) {
      navigate("/login");
      return;
    }

    addToCart(item);
    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 py-16 px-8">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-12 drop-shadow-md">
        🍜 Our Special Menu
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Loading menu items...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {items.map((food) => (
            <div
              key={food.id}
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={food.img}
                alt={food.name}
                className="rounded-xl w-full h-48 object-cover"
              />
              <h2 className="text-xl font-bold mt-4 text-gray-800">
                {food.name}
              </h2>
              <p className="text-gray-600 mt-2 font-semibold">
                ₹{food.price}
              </p>

              <button
                onClick={() => handleAddToCart(food)}
                className="mt-5 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl font-semibold shadow-md"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
