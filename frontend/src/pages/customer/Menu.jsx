import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../utils/api";

export default function Menu() {
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/menu")
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleAdd = async (item) => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await api.post("/cart/add", {
        itemId: item._id,
        quantity: 1
      });

      alert("Item added to cart!");
    } catch (err) {
      console.log(err);
      alert("Failed to add item");
    }
  };

  return (
    <div className="px-10 py-14 bg-[#FFD6C9] min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Our Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((food) => (
          <div key={food._id} className="bg-white shadow-xl rounded-2xl p-6">

            {/* Image from FULL URL */}
            <img
              src={food.image}   // <-- Works as long as DB stores full URL
              alt={food.name}
              className="rounded-xl w-full h-48 object-cover"
            />

            <h2 className="text-2xl font-semibold mt-4">{food.name}</h2>
            <p className="text-gray-600 mt-2">{food.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-orange-500 text-xl">
                ₹{food.price}
              </span>

              {user?.role === "customer" && (
                <button
                  onClick={() => handleAdd(food)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
