import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Spicy Chicken Bowl",
    price: 180,
    img: "https://images.unsplash.com/photo-1606756790138-87a0c7176678",
  },
  {
    id: 2,
    name: "Veggie Delight",
    price: 120,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
  },
  {
    id: 3,
    name: "Prawn Noodles",
    price: 150,
    img: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
  },
];

const Menu = () => {
  const { role } = useAuth();
  const navigate = useNavigate();

  const handleAdd = (id) => {
    if (role !== "customer") {
      navigate("/login");
      return;
    }
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 p-10">

      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">
        Our Delicious Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition"
          >
            <img
              src={item.img}
              className="w-full h-48 object-cover rounded-xl"
            />

            <h2 className="mt-4 text-xl font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600 mt-2 font-semibold">₹{item.price}</p>

            <button
              onClick={() => handleAdd(item.id)}
              className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl font-semibold hover:bg-orange-700"
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Menu;
